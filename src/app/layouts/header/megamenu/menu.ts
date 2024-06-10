interface Category {
  id: number;
  heading: string;
  items: string[];
}

let dogMenu : Category[] = [
    {
      "id": 1,
      "heading": "Dog Food",
      "items": [
        "Dry Dog Food",
        "Wet Dog Food",
        "Grain-Free Dog Food",
        "Puppy Food",
        "Senior Dog Food"
      ]
    },
    {
      "id": 2,
      "heading": "Dog Treats",
      "items": [
        "Biscuits",
        "Jerky",
        "Dental Chews",
        "Training Treats",
        "Rawhide"
      ]
    },
    {
      "id": 3,
      "heading": "Dog Supplies",
      "items": [
        "Leashes",
        "Collars",
        "Harnesses",
        "Beds",
        "Crates"
      ]
    },
    {
      "id": 4,
      "heading": "Dog Healthcare",
      "items": [
        "Flea and Tick Prevention",
        "Vitamins and Supplements",
        "Dental Care",
        "First Aid",
        "Eye and Ear Care"
      ]
    },
    {
      "id": 5,
      "heading": "Dog Accessories",
      "items": [
        "Bandanas",
        "Bows and Bowties",
        "Clothing",
        "Boots",
        "Grooming Tools"
      ]
    }
  ]
  let catMenu : Category[] = [
    {
      "id": 1,
      "heading": "Cat Food",
      "items": [
        "Dry Cat Food",
        "Wet Cat Food",
        "Grain-Free Cat Food",
        "Kitten Food",
        "Senior Cat Food"
      ]
    },
    {
      "id": 2,
      "heading": "Cat Treats",
      "items": [
        "Treat Sticks",
        "Catnip Treats",
        "Crunchy Treats",
        "Soft Treats",
        "Freeze-Dried Treats"
      ]
    },
    {
      "id": 3,
      "heading": "Cat Supplies",
      "items": [
        "Litter Boxes",
        "Scratching Posts",
        "Cat Beds",
        "Toys",
        "Carriers"
      ]
    },
    {
      "id": 4,
      "heading": "Cat Healthcare",
      "items": [
        "Flea and Tick Prevention",
        "Vitamins and Supplements",
        "Dental Care",
        "First Aid",
        "Eye and Ear Care"
      ]
    },
    {
      "id": 5,
      "heading": "Cat Accessories",
      "items": [
        "Collars",
        "Harnesses",
        "Grooming Tools",
        "Bowls",
        "Cat Trees"
      ]
    }
  ]

let smallAnimalMenu : Category[] = [
    {
      "id": 1,
      "heading": "Small Animal Food",
      "items": [
        "Rabbit Food",
        "Guinea Pig Food",
        "Hamster Food",
        "Gerbil Food",
        "Chinchilla Food"
      ]
    },
    {
      "id": 2,
      "heading": "Small Animal Treats",
      "items": [
        "Dried Fruits",
        "Vegetable Treats",
        "Nut Treats",
        "Yogurt Treats",
        "Timothy Hay Treats"
      ]
    },
    {
      "id": 3,
      "heading": "Small Animal Supplies",
      "items": [
        "Cages",
        "Bedding",
        "Toys",
        "Water Bottles",
        "Exercise Wheels"
      ]
    },
    {
      "id": 4,
      "heading": "Small Animal Healthcare",
      "items": [
        "Flea and Mite Treatments",
        "Vitamins and Supplements",
        "Dental Care",
        "First Aid Kits",
        "Grooming Tools"
      ]
    },
    {
      "id": 5,
      "heading": "Small Animal Accessories",
      "items": [
        "Hammocks",
        "Tunnels",
        "Hideouts",
        "Bottles",
        "Feeders"
      ]
    }
  ]
  interface MenuItem {
    id: number;
    title: string;
  }
  
  interface LearningItem {
    id: number;
    title: string;
  } 
  
  interface FishesAndTurtlItem {
    id: number;
    title: string;
  }
  
  const birdsMenu: MenuItem[] = [
    { id: 1, title: "FOODS" },
    { id: 2, title: "TOYS" },
    { id: 3, title: "VITAMIN AND SUPPLIMENT" },
    { id: 4, title: "HOUSE" }
  ];
  
  const Learn: LearningItem[] = [
    { id: 1, title: "Blog" },
    { id: 2, title: "Know Your Breed" }
  ];

  const fishesAndTurtleMenu: FishesAndTurtlItem[] = [
    { id: 1, title: "Food" },
    { id: 2, title: `Turtle Food , Vitamin and Suplement` }
  ];
  
export { dogMenu,catMenu, smallAnimalMenu , birdsMenu , Learn , fishesAndTurtleMenu}
  