import images from "./images";

const wines = [
  {
    title: "Jollof Rice",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Fried Rice",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Banku & Tilapia",
    price: "$44 ~ $50",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Boiled Yam/Fried Yam",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Kelewele",
    price: "$26 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
];

const cocktails = [
  {
    title: "Classic Burger",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Pizza",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Steak",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Pasta",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
  {
    title: "Potato Fries",
    price: "$31 ~ $40",
    pre: "with ~~~",
    tags: ["chicken", "|", "Fish", "|", "Tilapia"],
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Culinary Excellence: Bold Flavors, Refined Techniques.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Shining Talent: Inspiring Innovation, Passionate Craft.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Exemplary Service, Memorable Experience.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Culinary Virtuoso: Exquisite Creations, Masterful Taste.",
  },
];

const menus = [
  {
    title: "Exquisite Starters",
    desc: "Indulge in our delectable range of appetizers, from Kelewele, Chichinga (Chicken or Goat Kebab), Spring Rolls, Pinchitos to Hara Bhara Kebab.",
  },
  {
    title: "Chef's Specials",
    desc: "Experience culinary artistry with our Chef's Specials, featuring innovative combinations like our signature Truffle Mac and Cheese and melt-in-your-mouth Braised Short Ribs.",
  },
  {
    title: "Garden Fresh Salads",
    desc: "Enjoy a burst of freshness with our vibrant salads, such as the refreshing Watermelon and Feta Salad or the nutritious Superfood Salad.",
  },
  {
    title: "Main Course Delights",
    desc: "Dive into a world of flavors with our main courses, including all your rice dishes, Banku with any soup of your choice / hot chilling sauce and Tilapia , and Ampesi with Palava/Kotomeire sauce.",
  },
  {
    title: "Sweet Indulgence",
    desc: " End your meal on a sweet note with our irresistible desserts—decadent Chocolate Lava Cake, Vanilla Cupcake, and more.",
  },
];

const services = [
  {
    title: "Home Cooking Experience",
    desc: "Leave it to our skilled chefs to transform your kitchen into a gourmet haven. Let us bring the restaurant experience to your doorstep as we prepare a customized menu with flavors and presentation that will leave you amazed.",
  },
  {
    title: "Hassle-free Housekeeping",
    desc: "Complete your dining experience without lifting a finger. Our housekeeping services ensure that your space remains tidy and spotless while you relax and revel in the joy of savoring exquisite cuisine.",
  },
  {
    title: "Event Catering",
    desc: "We take pride in offering more than just exceptional dining experiences; we specialize in creating memorable moments for your special occasions. Whether you're planning an intimate gathering, a corporate event, or a grand celebration, our team is here to elevate your event with delectable dishes and impeccable service.",
  },
  {
    title: "Full-Service Events",
    desc: "Let us take care of the details! From venue selection to decor, we offer comprehensive event planning services to bring your vision to life. Work with our chefs to create a menu that reflects your preferences, dietary needs, and the theme of your event.",
  },
];

const restaurantData = { wines, cocktails, awards, menus, services };

export default restaurantData;
