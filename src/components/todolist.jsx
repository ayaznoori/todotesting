import React, { useState } from "react";
import { Tododisplay } from "./tododisplay";
import { Inputlist } from "./todoinput";
const arr=[];
const concat=(inputitem)=>{
     arr.push(inputitem);
    }
export {concat ,arr }