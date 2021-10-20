import logo from './logo.svg';
import './App.css';

function DailyJournal() {
  return (
    <div className="text-center container text-red-500">
      <h1>Daily Journal</h1>
      <div className="text-left">Title</div>
      <div className="text-left">Journal Entry
      <input className="placeholder-gray-500 w-56  px-3 pl-8 py-1 focus:shadow-outline hover:w-64 hover:w-64" type="text" placeholder="Today I am..."></input></div>
      <div className="text-left"><div class="inline-block">
  <span class="text-gray-700">Tags</span>
  <div class="mt-2">
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox"/>
        <span class="ml-2">Coding</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox"/>
        <span class="ml-2">Styling</span>
      </label>
    </div>
    <div>
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox"/>
        <span class="ml-2">Other</span>
      </label>
    </div>
  </div>
</div>
      </div><div><div class="relative inline-block object-left text-left">
  <div>
    <button type="button" class="inline-flex justify-left w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Mood
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
      <div class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
    
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Happy</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Okey Dokey</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sad</a>
      <form method="POST" action="#" role="none"></form>
      </div>
      </div>
      </div>
      
      </div>
      </div>
     </div>
   

  );
}

export default DailyJournal;
