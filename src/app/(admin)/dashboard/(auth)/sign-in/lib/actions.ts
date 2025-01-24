"use server"

import { schemaSignIn } from "@/lib/schema";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation"
import prisma from "../../../../../../../lib/prisma";
import bcrypt from 'bcrypt'
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";


export async function SignIn(
    _: unknown,
    formData: FormData
): Promise<ActionResult> {
    const validate = schemaSignIn.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
})

if (!validate.success) {

    console.log(validate)
    return { error: validate.error.errors[0].message }
}
    return redirect('/dashboard/sign-in')
}