/**
 * Created by Afek Ben Simon on 04/12/2016.
 */

var periodObject=function Period(){
    this.fromDate=new Date();
    this.toDate=new Date();
    this.daysToShow=new Array();
    this.TimeShowFrom=[];
    this.TimeShowUntil=[];
    this.SecondsToShow ;
};

function page() {
    this.name;
    this.massageArr = [5];
    this.pictureArray = new Array();
    this.hyperText;
    this.dpage = new periodObject;
    this.screenId=[];
}

function updateDates() {


    //First pages //////////////
    pages[0]=new page();
    pages[0].name="First Message";
    pages[0].massageArr=["Message 1 row 1","Message 1 row 2","Message 1 row 3","Message 1 row 4"];
    pages[0].pictureArray=["images/1.jpg","images/2.jpg"];
    pages[0].hyperText="./templateA.html";
    pages[0].dpage.fromDate=new Date("2016-01-01");
    pages[0].dpage.toDate=new Date("2017-01-01");
    pages[0].dpage.daysToShow=['1','3'];
    pages[0].dpage.TimeShowFrom=6;
    pages[0].dpage.TimeShowUntil=12;
    pages[0].dpage.SecondsToShow=3000;
    pages[0].screenId=[1,2];

    //Seconds pages //////////////
    pages[1]=new page();
    pages[1].name="Second Message";
    pages[1].massageArr=["Message 2 row 1","Message 2 row 2","Message 2 row 3","Message 2 row 4","Message 2 row 5",
        "Message 2 row 6","Message 2 row 7","Message 2 row 8","Message 2 row 9","Message 2 row 10"];
    pages[1].pictureArray=["images/2.jpg"];
    pages[1].hyperText="./templateB.html";
    pages[1].dpage.fromDate=new Date("2016-03-01");
    pages[1].dpage.toDate=new Date("2017-05-01");
    pages[1].dpage.daysToShow=['3'];
    pages[1].dpage.TimeShowFrom=10;
    pages[1].dpage.TimeShowUntil=16;
    pages[1].dpage.SecondsToShow=3000;
    pages[1].screenId=[1,3];

    //Third pages //////////////
    pages[2]=new page();
    pages[2].name="Third Message";
    pages[2].massageArr=["Message 3 row 1","Message 3 row 2","Message 3 row 3","Message 3 row 4","Message 3 row 5"];
    pages[2].pictureArray=["images/3.jpg"];
    pages[2].hyperText="./templateA.html";
    pages[2].dpage.fromDate=new Date("2016-05-01");
    pages[2].dpage.toDate=new Date("2017-06-15");
    pages[2].dpage.daysToShow=['0','1','2','3','4','5','6'];
    pages[2].dpage.TimeShowFrom=8;
    pages[2].dpage.TimeShowUntil=22;
    pages[2].dpage.SecondsToShow=3000;
    pages[2].screenId=[2,3];

    //Fourth pages //////////////
    pages[3]=new page();
    pages[3].name="Fourth Message";
    pages[3].massageArr=["Message 4 row 1","Message 4 row 2"];
    pages[3].pictureArray=[];
    pages[3].hyperText="./templateC.html";
    pages[3].dpage.fromDate=new Date("2016-03-29");
    pages[3].dpage.toDate=new Date("2016-04-15");
    pages[3].dpage.daysToShow=['1'];
    pages[3].dpage.TimeShowFrom=15;
    pages[3].dpage.TimeShowUntil=19;
    pages[3].dpage.SecondsToShow=3000;
    pages[3].screenId=[1];

    //Fifth pages //////////////
    pages[4]=new page();
    pages[4].name="Fifth Message";
    pages[4].massageArr=["Message 5 row 1","Message 5 row 2","Message 5 row 3","Message 5 row 4","Message 5 row 5","Message 5 row 6","Message 5 row 7"];
    pages[4].pictureArray=["images/4.jpg","images/5.jpg"];
    pages[4].dpage.fromDate=new Date("2016-03-29");
    pages[4].dpage.toDate=new Date("2016-04-15");
    pages[4].dpage.daysToShow=['1','2','3'];
    pages[4].dpage.TimeShowFrom=1;
    pages[4].dpage.TimeShowUntil=23;
    pages[4].dpage.SecondsToShow=3000;
    pages[4].screenId=[3];


}

var later = ["A","B","C","D"];
var pages = new Array();
var date = new Date();
var counter = 0;
updateDates();

function dates(index) {
    var flagA=false,flagB=false,flagC=false,flagD=false;
    if(moment(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()).isBetween(pages[index].dpage.fromDate,pages[index].dpage.toDate)){
        flagA = true;
    }
    if(pages[index].dpage.TimeShowFrom > pages[index].dpage.TimeShowUntil){
        if(date.getHours()>pages[index].dpage.TimeShowFrom || date.getHours()<pages[index].dpage.TimeShowUntil){
            flagB = true
        }
    }
    if(pages[index].dpage.TimeShowFrom < pages[index].dpage.TimeShowUntil){
        if(date.getHours()>pages[index].dpage.TimeShowFrom && date.getHours()<pages[index].dpage.TimeShowUntil){
            flagC = true;
        }
    }
    for (i=0;i<pages[index].dpage.daysToShow.length;i++){
        if(date.getDay()==pages[index].dpage.daysToShow[i]){
            flagD=true;
            continue;
        }
    }
    return (flagA&&(flagB||flagC)&&flagD);
}


function checkData(index) {
    if (index >= pages.length) {
        index = 0;
    }
    if(dates(index))
        return index;
    else
        return(checkData(index+1));
}


function start() {
    $(document).ready(function () {
        counter = checkData(counter);
        if(pages[counter] != null){
            $(document).ready(function () {
                $('#A1').load(pages[counter].hyperText);
                if(pages[counter].pictureArray[0]!= null)
                    $("#pic1").replaceWith("<img id='pic1' height=150 width=150' src="+pages[counter].pictureArray[0]+"/>");
                else
                    $("#pic1").replaceWith("<img id='pic1'/>");
                if(pages[counter].pictureArray[1]!= null)
                    $("#pic2").replaceWith("<img id='pic2' height=150 width=150' src="+pages[counter].pictureArray[1]+"/>");
                else
                    $("#pic2").replaceWith("<img id='pic2'/>");
                $('#p0').replaceWith('<p id=p'+0+'>'+pages[counter].massageArr[0]+'</p>');
                $('#p1').replaceWith('<p id=p'+1+'>'+pages[counter].massageArr[1]+'</p>');
                if(pages[counter].massageArr[2]!=null)
                    $('#p2').replaceWith('<p id=p'+2+'>'+pages[counter].massageArr[2]+'</p>');
                else
                    $('#p2').replaceWith('<p id=p'+2+'>'+''+'</p>');
                if(pages[counter].massageArr[3]!=null)
                    $('#p3').replaceWith('<p id=p'+3+'>'+pages[counter].massageArr[3]+'</p>');
                else
                    $('#p3').replaceWith('<p id=p'+3+'>'+''+'</p>');
                if(pages[counter].massageArr[4]!=null)
                    $('#p4').replaceWith('<p id=p'+4+'>'+pages[counter].massageArr[4]+'</p>');
                else
                    $('#p4').replaceWith('<p id=p'+4+'>'+''+'</p>');
                if(pages[counter].massageArr[5]!=null)
                    $('#p5').replaceWith('<p id=p'+5+'>'+pages[counter].massageArr[5]+'</p>');
                else
                    $('#p5').replaceWith('<p id=p'+5+'>'+''+'</p>');
                if(pages[counter].massageArr[6]!=null)
                    $('#p6').replaceWith('<p id=p'+6+'>'+pages[counter].massageArr[6]+'</p>');
                else
                    $('#p6').replaceWith('<p id=p'+6+'>'+''+'</p>');
                if(pages[counter].massageArr[7]!=null)
                    $('#p7').replaceWith('<p id=p'+7+'>'+pages[counter].massageArr[7]+'</p>');
                else
                    $('#p7').replaceWith('<p id=p'+7+'>'+''+'</p>');
                if(pages[counter].massageArr[8]!=null)
                    $('#p8').replaceWith('<p id=p'+8+'>'+pages[counter].massageArr[8]+'</p>');
                else
                    $('#p8').replaceWith('<p id=p'+8+'>'+''+'</p>');
                if(pages[counter].massageArr[9]!=null)
                    $('#p9').replaceWith('<p id=p'+9+'>'+pages[counter].massageArr[9]+'</p>');
                else
                    $('#p9').replaceWith('<p id=p'+9+'>'+''+'</p>');
                if(pages[counter].massageArr[10]!=null)
                    $('#p10').replaceWith('<p id=p'+10+'>'+pages[counter].massageArr[10]+'</p>');
                else
                    $('#p10').replaceWith('<p id=p'+10+'>'+''+'</p>');
            })
            setTimeout(start,pages[counter].dpage.SecondsToShow);
            counter++;
        }
    });
}
start();

function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function () {

        if (this.readyState == 4 && this.status == 200) {
            Messages=JSON.parse(this.responseText);
            //$(document).getElementById("p1").innerHTML = this.responseText;
        }

    };

    xhttp.open("GET", "data.json", true);
    xhttp.send();

}

loadDoc();
start();