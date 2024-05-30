const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const mask = document.querySelector(".mask");

// 初始化熒幕設定，依照熒幕寬度初始化按鈕及菜單樣式
window_width = window.innerWidth
if(window.innerWidth > 766){
    menu_btn.classList.add("close_class");
    close_btn.classList.add("close_class");
    menu.classList.remove("close_class");
}else{
    menu_btn.classList.remove("close_class");
    close_btn.classList.add("close_class");
    menu.classList.add("close_class");
}
// 監聽熒幕寬度變化，依照熒幕寬度改變按鈕及菜單樣式
window.addEventListener('resize', ()=>{
    mask.classList.add("close_class");
    if(window.innerWidth > 766){
        menu_btn.classList.add("close_class");
        close_btn.classList.add("close_class");
        menu.classList.remove("close_class");
    }else{
        menu_btn.classList.remove("close_class");
        close_btn.classList.add("close_class");
        menu.classList.add("close_class");
    }
})
// 監聽全局點擊事件，事件捕獲，在close_btn顯示時，點擊除menu外的任意位置關閉menu及close_btn，打開menu_btn
document.addEventListener('click', e=>{
    if(!close_btn.classList.contains('close_class') && !menu.contains(e.target)){
        // console.log("enter");
        menu_btn.classList.remove("close_class");
        close_btn.classList.add("close_class");
        mask.classList.add("close_class");
        menu.classList.add("close_class");
    }    
    }, true);
// 監聽menu_btn點擊事件，點擊後執行對應步驟
menu_btn.addEventListener('click', ()=>{
    menu_btn.classList.add("close_class");
    close_btn.classList.remove("close_class");
    mask.classList.remove("close_class");
    menu.classList.remove("close_class");
    }, false);