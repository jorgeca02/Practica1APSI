import {assertEquals} from "https://deno.land/Std@0.159.0/testing/asserts.ts";
import{sub} from "./main.ts"
Deno.test(function addTest(){
    assertEquals(sub(3,2),1);
})
