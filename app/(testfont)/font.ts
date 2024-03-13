import { Poppins } from 'next/font/google'
import { Tiro_Tamil } from 'next/font/google'
import { Roboto } from 'next/font/google'

const poppin = Poppins( {
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
  subsets: [ "latin" ],
  variable: '--font-poppin'
} );
const tiro_timil = Tiro_Tamil( {
  weight: [ '400' ],
  subsets: [ "latin" ],
  variable: '--Tiro-Tamil'
} );
const roboto = Roboto( {
  weight: [ '400', '900' ],
  subsets: [ "latin" ],
  variable: '--font-Roboto'
} );
export const font_poppin = poppin.className
export const font_tiro_timin = tiro_timil.className
export const font_roboto = roboto.className
