// ts-nocheck ignores all ts errors in the file
// @ts-nocheck

// ts-ignore ignores any ts errors on the next line
// @ts-ignore

import { NextRequest, NextResponse } from "next/server";

export default async function add(req: NextRequest, res: NextResponse) {
    const { position, tel, mail, photo } = JSON.parse(req.body);

    console.log(position);

    res.status(200).send({ res: "ok" });
}
