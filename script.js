const sideMenu = doocument.querySelector('#sideMenu');
const navBar = doocument.querySelector("nav");
const navLinks = doocument.querySelector("nav ul");


function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classlist.add('bg-white','bg-opacity-50', 'backdrop-blur-1g','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }
    else{
        navBar.classlist.remove('bg-white','bg-opacity-50', 'backdrop-blur-1g','shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classlist.add('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-white/50', "dark:bg-transparent");
    }
})

//-——-light mode and dark mode------



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(' (prefers-color-scheme: dark)').matches)) {
        document.documentElement.classlist.add('dark')
    } 
    else {
        document.documentElement.classlist.remove('dark')
    }
    function toggleTheme(){
        document.documentElement.classList.toggle('dark')

        if(document.documentElement.classList.contains('dark')){
            localStorage.theme = 'dark';
        }
        else{
            localstorage.theme = 'light';
        }
    }