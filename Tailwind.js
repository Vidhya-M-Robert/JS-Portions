{/* <div className="bg-violet-200 h-10 w-full border-2 border-violet-600 rounded-md my-10 p-6 flex justify-center items-center">
  <h1 className="text-center font-mono font-extrabold" >Hello</h1>
</div>
// Flex

<div className="flex justify-end space-x-6 mt-2">
  <div className="h-16 w-16 rounded-full bg-blue-500"></div>
  <div className="h-16 w-16 rounded-full bg-red-500"></div>
  <div className="h-16 w-16 rounded-full bg-yellow-500"></div>
</div>

<div className="flex flex-col items-center justify-center space-y-6 mt-2">
  <div className="h-16 w-16 rounded-full bg-blue-500"></div>
  <div className="h-16 w-16 rounded-full bg-red-500"></div>
  <div className="h-16 w-16 rounded-full bg-yellow-500"></div>
</div> */}

{/* <div className="grid grid-cols-3 gap-2 mt-2 mx-2">
  <div className="h-16 w-16 rounded-full bg-blue-500"></div>   <!-- If u don't provide the width it naturally expand to fill its space  / -->
  <div className="h-16 w-16 rounded-full bg-red-500"></div>
  <div className="h-16 w-16 rounded-full bg-yellow-500"></div>
</div>

<!-- <div className="md:block hidden">
  <p className="text-white">I appear on screen wider than 768px</p>
</div> -->
<!-- <div className="sm:bg-amber-500 md:bg-amber-700">
  <p className="text-white">I appear on screen wider than 768px</p>
</div> -->

<div className="max-sm:bg-amber-500 max-md:bg-amber-700">
  <p className="text-white">I appear on screen wider than 768px</p>
</div> */}

// Dark mode

<div className="bg-white dark:bg-black text-black dark:text-white">
  Dark mode enabled
  </div>

  // Tailwind css directives

  // @import 
  // @theme
  // @source 
  // @utility
  // @variant
  // @reference
  // @apply
  // @custom-variant


//   <div>
// <p className="p-[16px] text-[30px] text-chestnut bg-zinc-50">Chestnut Color + More styles
// </p>
//   </div>


// @import "tailwindcss";
// body{
//   background-color: #10172a;
// }
// @theme {
//   --color-chestnut: #973F29;
// }

// colors are defined in this way by prefixing them with --color- NAME
//eg: --font-


// big className issue 
// firsf  -; break the layout into specific components instead of writing everything in a single page
// Second =; use directives

// base , components , utilities
//base => applies styles globally across your projects for your elements like h1 tags or p tags.


// @layer base{
//   h1{
//     font-size: var(--text-2xl);
//   }
//   h2{
//     font-size: var(--text-xl);
//   }
// // }

// @apply insters Tailwind CSS Styles into CSS, @layer for creating custom styles for base components



{/* <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-black">
  <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">Writes Upside-Down</h3>
  <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</p>

 <button
    id="toggleDark"
    className="px-4 py-2 text-sm font-medium mt-8 text-blue-900 bg-blue-100 rounded-md"
    onclick="document.body.classNameList.toggle('dark')"
  >Toggle Dark Mode</button>
</div>


<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById('toggleDark')
    toggleDark.addEventListener('click', function() {
      if(document.documentElement.classNameList.includes('dark')) {
        document.documentElement.classNameList.remove('dark')
      }
      else {
        document.documentElement.classNameList.add('dark')
      }
      alert("click!")
    });
  });
</script> */}

// @layer base{
//   h3{
//     @apply text-base font-medium tracking-tight text-white
//   }
//   p{
//     @apply mt-2 text-sm text-slate-500 dark:text-blue-900
//   }
//   button{
//     @apply px-4 py-2 text-sm font-medium mt-8 text-blue-900 bg-blue-100 rounded-md
//   }
// }  don;t even have to mention in the html

// Defining the own utility files
// @utility flex-center{
//   @apply flex-center items-center;
// }

// Tips and Tricks
// Can change the default accent browser color for elements like checkboxes and radio groups

// GIVE className="accent-color"

// Fluid-Texts
// text-[min(10vw, 70px)]

// File => add prefix file to apply the all the customisation to the input

// highlight => 
  // className="selection:bg-green-400 selection:text-red"