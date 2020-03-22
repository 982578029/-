// JavaScript Document
window.onload=function()   //onload �¼�����ĵ�װ�ؽ���ʱ����
{ 
  var tag=document.getElementById("tag").children; //��ȡTag�µ�li����Tag��ǩ 
  var content=document.getElementById("tagContent").children; //��ȡTag��ǩ��Ӧ������ 
  content[0].style.display = "block"; //Ĭ����ʾ��һ����ǩ������ 
  var len= tag.length; 
  for(var i=0; i<len; i++)   //���۵��˭����ʵ�ֵ�ǰ��ʾ����������
    { 
    tag[i].index=i; //Ϊ����ˣ�����������ͣ� 
    tag[i].onmouseover = function()     //0��DOM���¼����ע��
        {     
		  for(var n=0; n<len; n++)
               {
                  tag[n].className="";
                  content[n].style.display="none"; 
                }   //���Ƚ�ȫ����div����
            tag[this.index].className = "current"; 
            content[this.index].style.display = "block"; 
      } 
   }
   
  var tag1=document.getElementById("tag1").children; 
  var content1=document.getElementById("tagContent1").children; 
  content1[0].style.display = "block";  
  var len1= tag1.length; 
  for(var i=0; i<len1; i++)
    { 
    tag1[i].index=i;  
    tag1[i].onmouseover = function() 
        {     
		  for(var n=0; n<len1; n++)
               {
                  tag1[n].className="";
                  content1[n].style.display="none"; 
                } 
            tag1[this.index].className = "current"; 
            content1[this.index].style.display = "block"; 
      } 
   }
   
  var tag2=document.getElementById("tag2").children; 
  var content2=document.getElementById("tagContent2").children; 
  content2[0].style.display = "block";  
  var len2= tag2.length; 
  for(var i=0; i<len2; i++)
    { 
    tag2[i].index=i;  
    tag2[i].onmouseover = function() 
        {     
		  for(var n=0; n<len2; n++)
               {
                  tag2[n].className="";
                  content2[n].style.display="none"; 
                } 
            tag2[this.index].className = "current"; 
            content2[this.index].style.display = "block"; 
      } 
   }
   
//var tag4=document.getElementById("tag4").children; 
//var content4=document.getElementById("tagContent4").children; 
//content4[0].style.display = "block";  
//var len4= tag4.length; 
//for(var i=0; i<len4; i++)
//  { 
//  tag4[i].index=i;  
//  tag4[i].onmouseover = function() 
//      {     
//		  for(var n=0; n<len4; n++)
//             {
//                tag4[n].className="";
//                content4[n].style.display="none"; 
//              } 
//          tag4[this.index].className = "current"; 
//          content4[this.index].style.display = "block"; 
//    } 
// }
   
  var tag5=document.getElementById("tag5").children; 
  var content5=document.getElementById("tagContent5").children; 
  content5[0].style.display = "block";  
  var len5= tag5.length; 
  for(var i=0; i<len5; i++)
    { 
    tag5[i].index=i;  
    tag5[i].onmouseover = function() 
        {     
		  for(var n=0; n<len5; n++)
               {
                  tag5[n].className="";
                  content5[n].style.display="none"; 
                } 
            tag5[this.index].className = "current"; 
            content5[this.index].style.display = "block"; 
      } 
   }
   
//var tag6=document.getElementById("tag6").children; 
//var content6=document.getElementById("tagContent6").children; 
//content6[0].style.display = "block";  
//var len6= tag6.length; 
//for(var i=0; i<len6; i++)
//  { 
//  tag6[i].index=i;  
//  tag6[i].onmouseover = function() 
//      {     
//		  for(var n=0; n<len6; n++)
//             {
//                tag6[n].className="";
//                content6[n].style.display="none"; 
//              } 
//          tag6[this.index].className = "current"; 
//          content6[this.index].style.display = "block"; 
//    } 
// }
   
//var tag7=document.getElementById("tag7").children; 
//var content7=document.getElementById("tagContent7").children; 
//content7[0].style.display = "block";  
//var len7= tag7.length; 
//for(var i=0; i<len7; i++)
//  { 
//  tag7[i].index=i;  
//  tag7[i].onmouseover = function() 
//      {     
//		  for(var n=0; n<len7; n++)
//             {
//                tag7[n].className="";
//                content7[n].style.display="none"; 
//              } 
//          tag7[this.index].className = "current"; 
//          content7[this.index].style.display = "block"; 
//    } 
// }
}
