import { promises } from "dns";
import React from "react";
import { useState } from "react";

interface Props {
  id: number;
  name: string;
  clicked: number;
}

export class User {
  id: number;
  name: string;
  clicked: number;

  constructor(id: number, name: string, clicked: number) {
    this.id = id;
    this.name = name;
    this.clicked = clicked;
  }
}
