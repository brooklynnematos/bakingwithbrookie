import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stateBakesData = {
  'Alabama': {
    title: 'Lane Cake',
    description: 'A rich, bourbon-laced layer cake filled with pecans, raisins, and coconut, officially recognized as Alabama\'s state dessert.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: true
  },
  'Alaska': {
    title: 'Baked Alaska',
    description: 'A dessert made of ice cream placed in a pie dish lined with slices of sponge cake and topped with meringue.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Arizona': {
    title: 'Sopaipillas',
    description: 'Light and crispy fried pastries drizzled with honey, a Southwest favorite.',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Arkansas': {
    title: 'Possum Pie',
    description: 'A layered cream cheese and chocolate pudding dessert with a pecan crust.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'California': {
    title: 'Avocado Parfait',
    description: 'A modern dessert featuring creamy avocado layered with granola and fresh fruits.',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Colorado': {
    title: 'Palisade Peach Cobbler',
    description: 'A warm cobbler made with famous Palisade peaches.',
    image: 'https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Connecticut': {
    title: 'Snickerdoodle Cookies',
    description: 'Classic cinnamon-sugar cookies with a perfectly chewy center.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Delaware': {
    title: 'Peach Pie',
    description: 'A classic pie showcasing Delaware\'s famous peaches.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Florida': {
    title: 'Key Lime Pie',
    description: 'A tangy and sweet pie made with Key limes, a Florida favorite.',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Georgia': {
    title: 'Peach Cobbler',
    description: 'A warm, sweet cobbler made with fresh Georgia peaches.',
    image: 'https://images.unsplash.com/photo-1562591970-254bc62245c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Hawaii': {
    title: 'Haupia',
    description: 'A traditional coconut milk-based Hawaiian dessert.',
    image: 'https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Idaho': {
    title: 'Spudnuts',
    description: 'Doughnuts made with potato flour, creating a uniquely tender texture.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Illinois': {
    title: 'Pumpkin Pie',
    description: 'A classic Thanksgiving dessert with Illinois-grown pumpkins.',
    image: 'https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Indiana': {
    title: 'Hoosier Pie',
    description: 'A simple sugar cream pie, also known as Indiana Sugar Cream Pie.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Iowa': {
    title: 'Scotcheroos',
    description: 'Rice Krispies treats topped with chocolate and butterscotch.',
    image: 'https://images.unsplash.com/photo-1587556930799-8dca6fad6d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Kansas': {
    title: 'Peppernuts',
    description: 'Small, spiced cookies brought by German Mennonite settlers.',
    image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Kentucky': {
    title: 'Derby Pie',
    description: 'A chocolate and walnut tart created for the Kentucky Derby.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Louisiana': {
    title: 'Beignets',
    description: 'French-style square doughnuts covered in powdered sugar.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Maine': {
    title: 'Whoopie Pie',
    description: 'Two chocolate cake-like cookies filled with marshmallow cream.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Maryland': {
    title: 'Smith Island Cake',
    description: 'A towering cake with 8-10 thin layers and chocolate frosting.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Massachusetts': {
    title: 'Boston Cream Pie',
    description: 'A vanilla cake filled with custard and topped with chocolate.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Michigan': {
    title: 'Bumpy Cake',
    description: 'Chocolate cake with buttercream bumps and chocolate frosting.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Minnesota': {
    title: 'Seven Layer Bars',
    description: 'Magic bars with graham crackers, chocolate, coconut, and more.',
    image: 'https://images.unsplash.com/photo-1587556930799-8dca6fad6d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Mississippi': {
    title: 'Mississippi Mud Pie',
    description: 'A chocolate lover\'s dream with a gooey chocolate filling.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Missouri': {
    title: 'Gooey Butter Cake',
    description: 'A flat and dense cake with a gooey butter topping.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Montana': {
    title: 'Huckleberry Ice Cream',
    description: 'Creamy ice cream made with wild Montana huckleberries.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Nebraska': {
    title: 'Tin Roof Sundae',
    description: 'Ice cream sundae with chocolate sauce and salted peanuts.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Nevada': {
    title: 'Gâteau Basque',
    description: 'A traditional Basque cake with a cherry or cream filling.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New Hampshire': {
    title: 'Apple Cider Doughnut',
    description: 'A cake doughnut made with local apple cider.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New Jersey': {
    title: 'Cannolis',
    description: 'Italian pastry tubes filled with sweet ricotta cream.',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New Mexico': {
    title: 'Biscochitos',
    description: 'Traditional anise-flavored cookies, the official state cookie.',
    image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'New York': {
    title: 'Cheesecake',
    description: 'The famous dense and creamy New York-style cheesecake.',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'North Carolina': {
    title: 'Sweet Potato Pie',
    description: 'A Southern classic made with North Carolina sweet potatoes.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'North Dakota': {
    title: 'Krumkake',
    description: 'Norwegian waffle cookies made with a decorative iron.',
    image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Ohio': {
    title: 'Buckeyes',
    description: 'Peanut butter balls dipped in chocolate.',
    image: 'https://images.unsplash.com/photo-1587556930799-8dca6fad6d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Oklahoma': {
    title: 'Fried Pie',
    description: 'Hand pies filled with fruit and fried until golden.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Oregon': {
    title: 'Marionberry Pie',
    description: 'Pie made with Oregon\'s own variety of blackberry.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Pennsylvania': {
    title: 'Shoofly Pie',
    description: 'A molasses pie with a crumb topping.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Rhode Island': {
    title: 'Fruit Tart',
    description: 'A buttery tart shell filled with custard and fresh fruits.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'South Carolina': {
    title: 'Huguenot Torte',
    description: 'A crispy, nutty meringue-based dessert.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'South Dakota': {
    title: 'Kuchen',
    description: 'German pastry filled with fruit and custard.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Tennessee': {
    title: 'Banana Pudding',
    description: 'Layers of vanilla wafers, bananas, and creamy pudding.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Texas': {
    title: 'Pecan Pie',
    description: 'Rich, gooey pie loaded with Texas pecans.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Utah': {
    title: 'Jell-O Salad',
    description: 'A layered gelatin dessert with fruit and cream.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Vermont': {
    title: 'Maple Creemee',
    description: 'Soft-serve ice cream made with pure Vermont maple syrup.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Virginia': {
    title: 'Peanut Pie',
    description: 'Similar to pecan pie but made with Virginia peanuts.',
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Washington': {
    title: 'Nanaimo Bars',
    description: 'No-bake bars with a chocolate-coconut base and custard filling.',
    image: 'https://images.unsplash.com/photo-1587556930799-8dca6fad6d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'West Virginia': {
    title: 'Molasses Cookies',
    description: 'Soft, chewy cookies rich with molasses flavor.',
    image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Wisconsin': {
    title: 'Kringle',
    description: 'Danish pastry filled with fruit or nuts.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
  'Wyoming': {
    title: 'Cowboy Cookies',
    description: 'Hearty cookies packed with oats, chocolate, and nuts.',
    image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hasFullRecipe: false
  },
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

  const handleStateClick = (state: string) => {
    setSelectedState(state);
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
            >
              <span className="text-center line-clamp-2">{state}</span>
            </button>
          ))}
        </div>
        
        {selectedState && (
          <div className="mt-12 bg-rose-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-rose-900 mb-4">{selectedState}'s Signature Bake</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <img
                src={stateBakesData[selectedState as keyof typeof stateBakesData]?.image || 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                alt={`${selectedState} Bake`}
                className="rounded-lg shadow-md"
              />
              <div>
                {stateBakesData[selectedState as keyof typeof stateBakesData] ? (
                  <>
                    <h4 className="text-xl font-medium text-rose-900 mb-2">
                      {stateBakesData[selectedState as keyof typeof stateBakesData].title}
                    </h4>
                    <p className="text-gray-700 mb-6">
                      {stateBakesData[selectedState as keyof typeof stateBakesData].description}
                    </p>
                    {stateBakesData[selectedState as keyof typeof stateBakesData].hasFullRecipe ? (
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