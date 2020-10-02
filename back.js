var target = document.querySelector('#targe');
var targetActiveClass = 'target-is-active';

// Call this function when it enters/leaves the viewport
var callback = function(entries, observer) { 
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(targetActiveClass);
    } else {
      entry.target.classList.remove(targetActiveClass);
    }
  });
};

// Create our observer
var observer = new IntersectionObserver(callback, {threshold: 0});
observer.observe(target);