import React from "react";

export const Authority = {
  system: 0,
  user: 1,
} as const;

export type Message = {
  auth: number;
  name: string;
  uuid: string | null;
  message: string | null;
};
