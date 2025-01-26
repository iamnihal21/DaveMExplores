const aboutSections = [
  {
    title: "A Company You Can Trust", 
    content:
      `Welcome to DaveMExplorer!
We’re thrilled to have you join us on this incredible journey of exploration, adventure, and storytelling. At DaveMExplorer, we’re not just travel vloggers—we’re passionate wanderers who believe that every road has a story, every destination has a soul, and every adventure is worth sharing.
`,
    image:
      "https://carcosmic.com/cdn/shop/articles/ppf_brands_in_india_1100x.jpg?v=1721646979",
    imageAlt: "Company image",
  },
  {
    title: "Our Mission",
    content:
      `Our mission is simple:
To inspire, educate, and entertain travelers and dreamers around the world. Whether you’re seeking thrilling road trips, serene getaways, or cultural deep dives, we’re here to show you that the world is full of wonder—one trip at a time.`,
    image:
      "https://cdn.pixabay.com/photo/2022/01/28/07/40/arrows-6973890_1280.jpg",
    imageAlt: "Vision image",
  },
  {
    title: "Our Journey So Far",
    content:
      "What started as a passion for road trips and capturing memories on camera has turned into an exciting adventure of vlogging and storytelling. From the high-altitude valleys of Himachal Pradesh to the lush plains of Gujarat, and from bustling cities to tranquil hideaways, our journey has taken us across breathtaking landscapes, diverse cultures, and unforgettable experiences.",
    image: "https://files.oaiusercontent.com/file-XY7DCbJPYFFGhR6TWmQNtQ?se=2025-01-26T13%3A38%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc66ab3f5-9418-4308-b31e-ac00cccffbfe.webp&sig=FFxHQf0N12yhILHhMEOIyTYDtv0yhYmF7DqEpwsAkPw%3D",
    imageAlt: "Mission image",
  },
];

export default function AboutPage() {
  return (
    <div class="bg-base-200">
      <div class="max-w-screen-xl mx-auto px-6 py-12">
        {aboutSections.map((section, index) => (
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-16">
            <div
              class={`space-y-6 order-1 ${index % 2 !== 0 ? "md:order-2" : ""}`}
            >
              <h2 class="text-4xl font-bold">{section.title}</h2>
              <p class="text-gray-600 font-medium leading-relaxed">
                {section.content}
              </p>
            </div>
            <div
              class={`flex justify-center order-2 ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.imageAlt}
                class="rounded-lg shadow-lg max-w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
