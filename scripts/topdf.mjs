import { chromium } from 'playwright'
import { existsSync } from 'node:fs'
const pre='/opt/pw-browsers/chromium'
const b=await chromium.launch({executablePath: existsSync(pre)?pre:undefined})
const p=await b.newPage()
await p.goto('file:///home/user/mak/scripts/cv.html',{waitUntil:'networkidle'})
await p.pdf({path:'public/cv-alireza-makvandi.pdf', format:'A4', printBackground:true, margin:{top:0,bottom:0,left:0,right:0}})
await b.close()
console.log('PDF done')
