import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type StateBakeData = {
  title: string;
  description: string;
  image: string;
  hasFullRecipe: boolean;
};

type StateBakesDataType = {
  [key: string]: StateBakeData;
};

const stateAbbreviations: { [key: string]: string } = {
  'Alabama': 'AL',
  'Alaska': 'AK',
  'Arizona': 'AZ',
  'Arkansas': 'AR',
  'California': 'CA',
  'Colorado': 'CO',
  'Connecticut': 'CT',
  'Delaware': 'DE',
  'Florida': 'FL',
  'Georgia': 'GA',
  'Hawaii': 'HI',
  'Idaho': 'ID',
  'Illinois': 'IL',
  'Indiana': 'IN',
  'Iowa': 'IA',
  'Kansas': 'KS',
  'Kentucky': 'KY',
  'Louisiana': 'LA',
  'Maine': 'ME',
  'Maryland': 'MD',
  'Massachusetts': 'MA',
  'Michigan': 'MI',
  'Minnesota': 'MN',
  'Mississippi': 'MS',
  'Missouri': 'MO',
  'Montana': 'MT',
  'Nebraska': 'NE',
  'Nevada': 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Ohio': 'OH',
  'Oklahoma': 'OK',
  'Oregon': 'OR',
  'Pennsylvania': 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  'Tennessee': 'TN',
  'Texas': 'TX',
  'Utah': 'UT',
  'Vermont': 'VT',
  'Virginia': 'VA',
  'Washington': 'WA',
  'West Virginia': 'WV',
  'Wisconsin': 'WI',
  'Wyoming': 'WY'
};

const stateBakesData: StateBakesDataType = {
  'Alabama': {
    title: 'Lane Cake',
    description: 'A rich, bourbon-laced layer cake filled with pecans, raisins, and coconut, officially recognized as Alabama\'s state dessert.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: true
  },
  'Alaska': {
    title: 'Blueberry Sourdough Scones',
    description: 'Wild blueberry-studded sourdough scones that capture Alaska\'s rugged spirit and abundant berries.',
    image: 'https://images.unsplash.com/photo-1519806104672-d42e25f422d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Arizona': {
    title: 'Prickly Pear Cheesecake',
    description: 'A vibrant desert-inspired cheesecake featuring local prickly pear cactus fruit.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Arkansas': {
    title: 'Possum Pie',
    description: 'A layered cream cheese dessert with chocolate, pecans, and whipped cream (don\'t worry, no possums involved!).',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'California': {
    title: 'Sourdough Bread',
    description: 'San Francisco-style sourdough bread with a perfectly crispy crust and tangy flavor.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Colorado': {
    title: 'High Altitude Chocolate Chip Cookies',
    description: 'Perfectly adjusted chocolate chip cookies that account for high altitude baking challenges.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Connecticut': {
    title: 'Nutmeg Spice Cookies',
    description: 'Delicate cookies celebrating Connecticut\'s nickname as the Nutmeg State.',
    image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Delaware': {
    title: 'Peach Pie',
    description: 'A tribute to Delaware\'s peach-growing history with a perfectly flaky crust.',
    image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Florida': {
    title: 'Key Lime Pie',
    description: 'The official state pie of Florida, featuring authentic Key lime juice and graham cracker crust.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Georgia': {
    title: 'Peach Cobbler',
    description: 'Classic Southern peach cobbler made with fresh Georgia peaches and a buttery crust.',
    image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Hawaii': {
    title: 'Butter Mochi',
    description: 'Chewy, sweet rice flour cake with coconut milk and Hawaiian flavors.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7300cde12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Idaho': {
    title: 'Potato Cinnamon Rolls',
    description: 'Ultra-soft cinnamon rolls made with Idaho potato in the dough for extra tenderness.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Illinois': {
    title: 'Chicago-Style Deep Dish Pizza',
    description: 'While not technically a dessert, this iconic deep dish is a beloved baked good.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Indiana': {
    title: 'Sugar Cream Pie',
    description: 'Also known as Hoosier Pie, this simple custard pie is an Indiana classic.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Iowa': {
    title: 'Corn Bread',
    description: 'Sweet, moist cornbread celebrating Iowa\'s corn-growing heritage.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Kansas': {
    title: 'Zwiebach',
    description: 'Traditional Mennonite double-decker dinner rolls made with potato water.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Kentucky': {
    title: 'Derby Pie',
    description: 'Chocolate and walnut tart inspired by the Kentucky Derby.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Louisiana': {
    title: 'King Cake',
    description: 'Traditional Mardi Gras king cake with cinnamon filling and colorful sugar topping.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Maine': {
    title: 'Wild Blueberry Pie',
    description: 'Traditional Maine wild blueberry pie with a perfectly flaky crust.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Maryland': {
    title: 'Smith Island Cake',
    description: 'Official state dessert with 8-10 thin layers of yellow cake with chocolate frosting.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Massachusetts': {
    title: 'Boston Cream Pie',
    description: 'The official state dessert: yellow cake filled with custard and topped with chocolate.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Michigan': {
    title: 'Cherry Pie',
    description: 'Made with famous Michigan Montmorency cherries.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Minnesota': {
    title: 'Swedish Kringla',
    description: 'Soft pretzel-shaped cookies reflecting Minnesota\'s Scandinavian heritage.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Mississippi': {
    title: 'Mud Pie',
    description: 'Rich chocolate pie with an Oreo crust, as deep and dark as the Mississippi River.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Missouri': {
    title: 'Gooey Butter Cake',
    description: 'St. Louis specialty with a yellow cake bottom and gooey butter topping.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Montana': {
    title: 'Huckleberry Bear Claws',
    description: 'Flaky pastries filled with wild Montana huckleberries.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Nebraska': {
    title: 'Runza',
    description: 'Yeasted bread pocket filled with beef, cabbage, and onions.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Nevada': {
    title: 'Basque Sheepherder\'s Bread',
    description: 'Dense, crusty bread baked in a Dutch oven, reflecting Nevada\'s Basque heritage.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New Hampshire': {
    title: 'Maple Oatmeal Bread',
    description: 'Hearty bread made with local maple syrup and rolled oats.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New Jersey': {
    title: 'Blueberry Crumb Cake',
    description: 'Made with famous Jersey blueberries and topped with brown sugar crumbs.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New Mexico': {
    title: 'Biscochitos',
    description: 'Traditional anise-flavored cookies, New Mexico\'s official state cookie.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New York': {
    title: 'New York Cheesecake',
    description: 'Classic, dense, and creamy New York-style cheesecake with a graham cracker crust.',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'North Carolina': {
    title: 'Sweet Potato Pie',
    description: 'Classic Southern pie made with North Carolina sweet potatoes.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'North Dakota': {
    title: 'Chokecherry Kuchen',
    description: 'German-Russian pastry made with local chokecherries.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Ohio': {
    title: 'Buckeye Candy',
    description: 'While not baked, these chocolate-dipped peanut butter balls are iconic.',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Oklahoma': {
    title: 'Fried Pie',
    description: 'Hand-held fruit pies with flaky crust, a state fair favorite.',
    image: 'https://images.unsplash.com/photo-1490323914169-4d5db28abf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Oregon': {
    title: 'Marionberry Pie',
    description: 'Made with Oregon\'s own variety of blackberry.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Pennsylvania': {
    title: 'Shoofly Pie',
    description: 'Traditional Pennsylvania Dutch pie with molasses filling and crumb topping.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Rhode Island': {
    title: 'Doughboys',
    description: 'Fresh fried dough topped with powdered sugar, a Rhode Island fair classic.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'South Carolina': {
    title: 'Coconut Cake',
    description: 'Towering layer cake filled and frosted with coconut, a Charleston specialty.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'South Dakota': {
    title: 'Kuchen',
    description: 'German pastry with sweet dough and fruit filling, the official state dessert.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Tennessee': {
    title: 'Stack Cake',
    description: 'Multi-layered cake with dried fruit filling, an Appalachian tradition.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Texas': {
    title: 'Pecan Pie',
    description: 'Rich, gooey pecan pie made with Texas pecans and a flaky butter crust.',
    image: 'https://images.unsplash.com/photo-1576391349821-c8d3c7c43c72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Utah': {
    title: 'Jell-O Pretzel Salad',
    description: 'While not technically baked, this layered dessert is a Utah staple.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7300cde12d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Vermont': {
    title: 'Maple Apple Pie',
    description: 'Classic apple pie sweetened with pure Vermont maple syrup.',
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Virginia': {
    title: 'Chess Pie',
    description: 'Simple custard pie with cornmeal and vinegar, a Southern classic.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Washington': {
    title: 'Apple Pie',
    description: 'Made with Washington State apples and a perfectly flaky crust.',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'West Virginia': {
    title: 'Molasses Cookies',
    description: 'Soft, chewy cookies made with rich molasses, a mountain state favorite.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Wisconsin': {
    title: 'Kringle',
    description: 'Danish pastry filled with fruit or nuts, the official state pastry.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Wyoming': {
    title: 'Sourdough Biscuits',
    description: 'Hearty biscuits made with traditional sourdough starter, a cowboy classic.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  }
};

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export function StateBakes() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const navigate = useNavigate();
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedState && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [selectedState]);

  const handleStateClick = (state: string) => {
    setSelectedState(state);
  };

  const getStateBakeData = (state: string): StateBakeData | undefined => {
    return stateBakesData[state];
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-rose-900 mb-12">State Bakes</h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {states.map((state) => (
            <button
              key={state}
              onClick={() => handleStateClick(state)}
              className={`h-12 flex items-center justify-center p-2 text-xs md:text-sm rounded transition-colors ${
                selectedState === state
                  ? 'bg-rose-500 text-white'
                  : 'bg-rose-100 hover:bg-rose-200 text-rose-900'
              }`}
              title={state}
            >
              <span className="text-center hidden md:block">{state}</span>
              <span className="text-center md:hidden">{stateAbbreviations[state]}</span>
            </button>
          ))}
        </div>
        
        {selectedState && (
          <div ref={detailsRef} className="mt-12 bg-rose-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-rose-900 mb-4">{selectedState}'s Signature Bake</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src={getStateBakeData(selectedState)?.image || 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                alt={`${selectedState} Signature Bake`}
                className="rounded-lg shadow-md object-cover aspect-video"
              />
              <div>
                {getStateBakeData(selectedState) ? (
                  <>
                    <h4 className="text-xl font-medium text-rose-900 mb-2">
                      {getStateBakeData(selectedState)?.title}
                    </h4>
                    <p className="text-gray-700 mb-6">
                      {getStateBakeData(selectedState)?.description}
                    </p>
                    {getStateBakeData(selectedState)?.hasFullRecipe ? (
                      <button
                        onClick={() => navigate(`/state-recipe/${selectedState.toLowerCase()}`)}
                        className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
                      >
                        View Full Recipe
                      </button>
                    ) : (
                      <p className="text-rose-700 italic">
                        Full recipe coming soon! We're currently perfecting this classic {selectedState} bake.
                        Check back later for the complete recipe and baking instructions.
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-gray-700">
                    Recipe coming soon! We're working on collecting and perfecting the signature
                    bake for {selectedState}. Check back later for updates.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}