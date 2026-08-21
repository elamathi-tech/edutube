// EduTube Common JavaScript
//===================================
//EXPLORE + SEARCH & FILTER
//===================================

const courses = [
  {
    title:"HTML & CSS Foundations",
    category:"web",
    difficulty:"beginner",
    duration:130,
    rating:4.5,
    description:"Learn the fundamentals of HTML and CSS."
  },

  {
    title:"JavaScript Essentials",
    category:"programming",
    difficulty:"beginner",
    duration:220,
    rating:4.8,
    description:"Learn the basics of JavaScript programming"
  },

  {
    title:"Responsive Design",
    category:"web",
    difficulty:"intermediate",
    duration:240,
    rating:4.6,
    description:"Build websites that work across different screen sizes."
  },

  {
    title:"Python for Data Science",
    category:"data",
    difficulty:"intermediate",
    duration:320,
    rating:4.7,
    description:"Learn Python concepts used in data science."
  },

  {
    title:"Advanced JavaScript",
    category:"programming",
    difficulty:"advanced",
    duration:195,
    rating:4.9,
    description:"Explore advanced JavaScript concepts."
  }  
];

const searchInput = document.getElementById("inputSearch");
const filterCategory = document.getElementById("filterCategory");
const difficultyFilter = document.getElementById("difficultyFilter");
const resetButton = document.getElementById("resetButton");
const resultCount = document.getElementById("countResult");
const courseContainer = document.getElementById("courseContainer");
const noResults = document.getElementById("noResults");
const durationFilter = document.getElementById("durationFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortFilter = document.getElementById("sortFilter");

function displayCourses(courseList){
  courseContainer.innerHTML = "";

  courseList.forEach(function(course){

    const courseCard = document.createElement("div");

    courseCard.className = "bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition";

    courseCard.innerHTML = `
    <div class="h-32 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
       <span class="text-4xl">🎓</span>
    </div>
    
    <h3 class="text-xl font-bold mb-2">
      ${course.title}
    </h3>
    
    <p class="text-sm text-gray-500 mb-3">
      ${course.description}
    </p>
    
    <div class="flex items-center justify-between mb-3">
      <span class="text-sm font-semibold text-indigo-600">
        ${course.category}
      </span>

      <span class="text-sm bg-gray-100 px-3 py-1 rounded-full">
        ${course.difficulty}
      </span>
    </div>
    
    <div class="flex items-center justify-between text-sm text-gray-500">
     <span>
      ⭐ ${course.rating}
     </span>

     <span>
      ⏱️ ${Math.floor(course.duration / 60)}h ${course.duration % 60}m
     </span>
    </div>
    `;

    courseContainer.appendChild(courseCard);
  });

  resultCount.textContent = `${courseList.length} courses`;

  if(courseList.length === 0){
    noResults.classList.remove("hidden");
  }
  else{
    noResults.classList.add("hidden");
  }
}

displayCourses(courses);



function filterCourses(){
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = filterCategory.value;
  const selectedDifficulty = difficultyFilter.value;
  const selectedDuration = durationFilter.value;
  const selectedRating = ratingFilter.value;

  const filteredCourses = courses.filter(function(course){

    const matchesSearch = course.title.toLowerCase().includes(searchText);

    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;

    const matchesDifficulty = selectedDifficulty === "all" || course.difficulty === selectedDifficulty;

    let matchesDuration = true; 
    if(selectedDuration === "short"){
      matchesDuration = course.duration < 120;
    }
    else if(selectedDuration === "medium"){
      matchesDuration = course.duration >= 120 && course.duration <=240;
    }
    else if(selectedDuration === "long"){
      matchesDuration = course.duration > 240;
    }

    let matchesRating = true;
    if(selectedRating !== "all"){
      matchesRating = course.rating >= Number(selectedRating);
    }

    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration && matchesRating;
  });

  if(sortFilter.value === "rating"){
    filteredCourses.sort(function (a, b){
      return b.rating - a.rating;
    })
  }
  else if (sortFilter.value === "duration"){
    filteredCourses.sort(function(a,b){
      return a.duration - b.duration;
    })
  }

  displayCourses(filteredCourses);
}

searchInput.addEventListener("input", filterCourses);
filterCategory.addEventListener("change", filterCourses);
difficultyFilter.addEventListener("change", filterCourses);
durationFilter.addEventListener("change", filterCourses);
ratingFilter.addEventListener("change", filterCourses);
sortFilter.addEventListener("change",filterCourses);

resetButton.addEventListener("click",function(){
  searchInput.value = "";
  filterCategory.value = "all";
  difficultyFilter.value = "all";
  durationFilter.value = "all";
  ratingFilter.value = "all";
  sortFilter.value = "popular";
  filterCourses();
});