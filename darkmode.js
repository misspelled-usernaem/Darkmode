document.body.style['backgroundColor']='#1d1d1d';
document.getElementById('statuspage_header_image')['src']='https://github.com/misspelled-usernaem/Darkmode/blob/main/Roblox.png?raw=true';
const names=['col-sm-9','container_name','pull-left text event_inner_title','component component_first status_td','component component_middle status_td','component component_last status_td','panel-body section_border_1 no_top_border make_round make_round_bottom_only'];
const panels=document.getElementsByClassName('panel-heading make_round');
const toppanel=document.getElementById('statusio_status_bar');
const setFunc=function(){
    const color=toppanel.style['background'].substring(4).replace(')','').split(',');
    toppanel.style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]}, 30%)`;
    document.querySelectorAll('div').forEach(element=>{
        if (element.className=='col-md-4'&&element.querySelector('h3')){
            element.style.color='#ffffff';
        };
    });
    
    for (var i in names){
        const name=names[i]
        const things=document.getElementsByClassName(name)
        for (var i in things){
            try{
                var element=things[i];
                element.style['backgroundColor']='#1d1d1d';
                element.style['borderColor']='#5e5e5e';
                element.style['color']='#ffffff';
            }catch{};
        };
    };

    for (var i in panels){
        try{
            var element=panels[i]
            const color=element.style['backgroundColor'].substring(4).replace(')','').split(',')
            element.style.backgroundColor=`rgb(${color[0]},${color[1]},${color[2]}, 30%)`
        }catch{};
    };

    document.getElementsByClassName('col-md-4 col-sm-6 hidden-xs')[0].style.background='#00000000'
};

setInterval(setFunc,100);