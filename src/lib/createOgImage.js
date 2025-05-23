export const createOgImage = ({
  title,
  meta,
}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/dawnfqxfy/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,
 
    // TITLE
    // Karla google font in light rose
    `l_text:Karla_72_bold:${e(title)},co_black,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,
 
    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:060121,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,
 
    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_twitter_name:khantseithuu`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,
 
    // BG
    `og-grainy_fiyfka.jpg`,
 
].join("/")
 
// double escape for commas and slashes
const e = (str) => encodeURIComponent(encodeURIComponent(str))