──────────────────────────────────────────────────────────
  SAMBUS EVENT APP — IMAGE & LINK MANAGEMENT
──────────────────────────────────────────────────────────

All content is controlled from  data.js  in the root folder.
No code changes needed — just edit data.js and drop image files here.

──────────────────────────────────────────────────────────
  1. LOGO
──────────────────────────────────────────────────────────
  a) Place your logo image in this folder:
       images/logo.png   (or .jpg, .svg — any format works)

  b) Open data.js and find this line near the top:
       logo: "",

  c) Update it to point to your file:
       logo: "images/logo.png",

  The nav logo mark will automatically switch from the "S"
  letter to your image.

  To go back to the default letter mark, set  logo: ""

──────────────────────────────────────────────────────────
  2. SPEAKER PHOTOS
──────────────────────────────────────────────────────────
  a) Place each speaker's photo in:
       images/speakers/firstname-lastname.jpg

  b) Open data.js and find the speakers array.
     Each speaker has a  photo:  field. Update it:

       photo: "images/speakers/amina-osei.jpg",

  If  photo  is left as  ""  the app will automatically
  generate an initials avatar as a fallback.

──────────────────────────────────────────────────────────
  3. REGISTRATION LINK
──────────────────────────────────────────────────────────
  Open data.js and find near the top:
    registrationUrl: "https://sambus.co.ke/events",

  Replace the URL with your registration form link.
  This updates BOTH the nav "Register" button AND the
  hero "Register Now" button at the same time.

──────────────────────────────────────────────────────────
