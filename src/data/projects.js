const base = import.meta.env.BASE_URL  // '/creative-tech-portfolio/' in prod, '/' in dev

export const projects = [
  {
    slug: "technology-tinder",
    title: "Technology Tinder",
    imageSize: "large",
    excerpt: "Have since reconsidered some of these hot takes.",
    coverImage: `${base}images/tech_tinder/bcycle-electric-1.png`,
    content: `# Technology Tinder

![](${base}images/tech_tinder/tech-tinder-0.png)
![](${base}images/tech_tinder/tech-tinder-1.png)
![](${base}images/tech_tinder/tech-tinder-2.png)
![](${base}images/tech_tinder/tech-tinder-3.png)
![](${base}images/tech_tinder/tech-tinder-4.png)
![](${base}images/tech_tinder/tech-tinder-5.png)
![](${base}images/tech_tinder/tech-tinder-6.png)
![](${base}images/tech_tinder/tech-tinder-7.png)
![](${base}images/tech_tinder/tech-tinder-8.png)
![](${base}images/tech_tinder/tech-tinder-9.png)
![](${base}images/tech_tinder/tech-tinder-10.png)
![](${base}images/tech_tinder/tech-tinder-11.png)
![](${base}images/tech_tinder/tech-tinder-12.png)
`
  },
  {
    slug: "idc1-ideation",
    title: "IDC1 Ideation",
    excerpt: "In retrospect these pitches got pretty ambitious.",
    coverImage: `${base}images/idc1_concepts/idc_1_concept_1.png`,
    content: `# IDC1 Ideation

![](${base}images/idc1_concepts/idc_1_concept_1.png)
![](${base}images/idc1_concepts/idc_1_concept_2.png)
![](${base}images/idc1_concepts/idc_1_concept_3.png)
`
  },
  {
    slug: "enclosures",
    title: "Enclosures",
    imageSize: "medium",
    excerpt: "If the clit has thus far eluded you, you can start here.",
    coverImage: `${base}images/enclosure_vag/enclosure_vag_complete.png`,
    content: `# Enclosures

## Vulva

![](${base}images/enclosure_vag/enclosure_vag.MOV)

Press a button, and the clit lights up!

Here's what the model file looks like:
![](${base}images/enclosure_vag/enclosure_vag_model.png)

And this is my first draft:
![](${base}images/enclosure_vag/enclosure_vag_first_draft.png)

The initial attempt had issues with the lid fitting snugly on the box, so I made a second version. After a few attempts, I found the best way to paint the pieces was using thin color washes of watered-down acrylic, built up in several layers.

Also, laser cutting is really fun.
![](${base}images/enclosure_vag/vag_lasercut.MOV)

An artful display of exploded vulva pieces:
![](${base}images/enclosure_vag/enclosure_vag_pieces.png)

And the final product!
![](${base}images/enclosure_vag/enclosure_vag_complete.png)

## Barbie Sketchers Lightup Shoe

![](${base}images/enclosure_shoe/shoe_lightup.MOV)

The button is on the bottom of the shoe, so the whole shoe lights up when you press down on it.

![](${base}images/enclosure_shoe/shoe_model.png)

The shoe took six or seven attempts to get right. I had a lot of issues with the printer until I figured out how supports work. All in all, the shoe is composed of five pieces that fit together. The shoe heel holds the circuit, and the top is just decoration.

![](${base}images/enclosure_shoe/shoe_printing.png)

![](${base}images/enclosure_shoe/enclosure_shoe_pieces.png)

The final product:
![](${base}images/enclosure_shoe/enclosure_shoe_complete.png)
`
  },
  {
    slug: "motor-buffet",
    title: "Motor Buffet",
    excerpt: "Rick Astley doing a funky little servo dance",
    coverImage: `${base}images/motor_buffet/rick.png`,
    audioSrc: `${base}images/motor_buffet/rickroll.MP3`,
    content: `# Motor Buffet

![](${base}images/motor_buffet/rick_dance.MOV)

We're no strangers to looooove

![](${base}images/motor_buffet/rick.png)

Rick's a 3D model, painted pink and sitting on a servo motor. He's doing a lil dance. We were his backup dancers.

Some proof I ran the other motors:
![](${base}images/motor_buffet/servo.MOV)
![](${base}images/motor_buffet/stepper.MOV)
![](${base}images/motor_buffet/dc.MOV)

Candidly, I had very little idea what was happening with the more complicated ones. I needed to follow the diagram really closely. Would love to have someone explain what was going on in more detail.
`
  },
  {
    slug: "idc1-project",
    title: "IDC1 In/Out Sign",
    excerpt: "An MMWave radar-powered in/out sign for Ruscha's office, built with laser-cut acrylic and hot glue.",
    coverImage: `${base}images/idc1_photos/out.PNG`,
    content: `# IDC1 In/Out Sign

Ruscha's office sits at the very back of the grad lab. People need to walk all the way into the lab to see if she's in her office. I made a sign that can tell people if she's in there.

![](${base}images/idc1_photos/out.PNG)
![](${base}images/idc1_photos/in.PNG)

This first version is held together by hot glue and a prayer, and the casing is too flimsy for the sign to actually be used. But I learned a lot about kerfing, welding acrylic, circuitry, and how to ruin two consecutive ESP32s.

![](${base}images/idc1_photos/idc1_guts.png)

The circuit uses an MMWave Radar sensor that can detect small amounts of movement. There's also a rocker switch so Ruscha can turn the system off. The enclosure is made of laser cut acrylic that shows every fingerprint ever.

But lo, it works.
![](${base}images/idc1_photos/idc1_vid.MOV)
`
  },

  {
    slug: "idc2-ideation",
    title: "IDC2 Ideation",
    excerpt: "I'm doing IDC1 again but better",
    coverImage: null,
    content: `# IDC2 Ideation

The original IDC1 was cool to look at and barely functional, so I redid it. New specs:
- It needs to be a single rigid object that can be mounted to a wall.
- It needs to have a better sensor enclosure that allows for a demo mode- showing "in" and "out" without requiring the correlated sensor reading.
`
  },
  {
    slug: "idc2-project",
    title: "IDC2 Project",
    excerpt: "Add your excerpt here.",
    coverImage: null,
    content: `# IDC2 Project

![](${base}images/idc2_photos/mattie-movie-edited.mp4)

She works! I'll have a full writeup soon.
`
  },
]
