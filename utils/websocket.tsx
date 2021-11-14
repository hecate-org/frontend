import { AES, enc } from "crypto-js";
import {
  AuthReplyMessage,
  GatewayMessage,
  OpCode,
} from "@hecate-org/blingaton-types/build";
import { Socket, io } from "socket.io-client";
import { createContext, useEffect, useState } from "react";

import { DefaultEventsMap } from "@socket.io/component-emitter";

interface CustomSocket extends Socket {
  reply: (
    ev: string,
    args: object
  ) => Socket<DefaultEventsMap, DefaultEventsMap>;
}

export const SocketContext = createContext<CustomSocket>(null);

const webSocket = () => {
  const [webSocket, setSocket] = useState<CustomSocket>(null);

  useEffect(() => {
    const async_wrapper = async () => {
      const key = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
      );
      const convertKey = async (
        convert: CryptoKey,
        key_type: string,
        format: "spki" | "pkcs8"
      ): Promise<string> => {
        key_type = key_type.toUpperCase();

        const exported = await window.crypto.subtle.exportKey(format, convert);
        const exportedAsString = String.fromCharCode.apply(
          null,
          new Uint8Array(exported)
        );
        const exportedAsBase64 = btoa(exportedAsString);
        return `-----BEGIN ${
          key_type == "PRIVATE" ? "RSA " : ""
        }${key_type} KEY-----\n${exportedAsBase64}\n-----END ${
          key_type == "PRIVATE" ? "RSA " : ""
        }${key_type} KEY-----`;
      };

      const publicKey = await convertKey(key.publicKey, "public", "spki");

      // connect to socket server
      const socket = io("ws://localhost:4000", {
        autoConnect: true,
      });

      const ws = socket as CustomSocket;
      let token: string = "";

      ws.reply = (
        ev: string,
        args: object
      ): Socket<DefaultEventsMap, DefaultEventsMap> => {
        const data = {
          op: 69420,
          data: AES.encrypt(
            enc.Utf8.parse(JSON.stringify(args)),
            token
          ).toString(),
        };

        return socket.emit(ev, data);
      };

      setSocket(ws);
      // log socket connection
      ws.on("auth", (payload: GatewayMessage) => {
        switch (payload.op) {
          case OpCode.hello:
            ws.emit("auth", {
              op: OpCode.auth_start,
              pub: publicKey,
            });
            break;

          case OpCode.auth_reply:
            const async_wrapper = async () => {
              const data = payload.data as unknown as AuthReplyMessage;
              const token_buff = await window.crypto.subtle.decrypt(
                {
                  name: "RSA-OAEP",
                },
                key.privateKey,
                Buffer.from(data.key, "base64")
              );

              token = new TextDecoder().decode(token_buff);
              ws.emit("auth", {
                op: OpCode.auth_success,
              });
            };
            async_wrapper();
            break;
        }
      });

      // socket disconnect onUnmount if exists
      if (socket)
        return () => {
          console.log("closing");
          socket.disconnect();
        };
    };
    async_wrapper();
  }, []);

  return webSocket;
};

export default webSocket;
