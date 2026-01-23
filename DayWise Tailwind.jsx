// Day 1
// Every CSS property becomes a small class

// Utility-first = no custom CSS classes. You build styles by combining tiny utility classes

return( 
  <>
<h1 className="text-3xl font-bold text-blue-600 mt-4">Hello</h1>

    <p className="text-blue-600">Blue helloooooo</p>
      <p className="text-red-500">red helloooooo</p>
      <p className="text-gray-700">gray helloooooo</p>
      {/* text-{color}-{shade} */}

      <div className="bg-yellow-200">Blue helloooooo</div>
      {/* bg-{color}-{shade} */}

      <div className="bg-blue-200 p-4">Blue helloooooo</div>
      <div className="bg-red-200 px-6">Blue helloooooo</div>
      {/* padding & margin */}

      <p className="text-blue-600 text-sm">Blue helloooooo</p>
      <p className="text-red-600 text-lg">Blue helloooooo</p>
      <p className="text-green-600 text-2xl">Blue helloooooo</p>
      <p className="text-orange-600 text-3xl">Blue helloooooo</p>
      {/* font-size */}

      <p className="text-gray-600 font-normal">normal</p>
      <p className="text-gray-600 font-bold">Bold</p>
      <p className="text-gray-600 font-semibold">semiBold</p>
      {/* font-weight */}

      </>
)