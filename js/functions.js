var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Fonction de PopUp (2 arguments : chemin img, titre)

function PopupImage(img,titre) { 
w=open("",'image','width=400,height=400,toolbar=no,scrollbars=no,resizable=no'); 
w.document.write("<HTML><HEAD><TITLE>"+titre+"</TITLE></HEAD>"); 
w.document.write("<SCRIPT language=javascript>function checksize() { if (document.images[0].complete) { window.resizeTo(document.images[0].width+10,document.images[0].height+30); window.focus();} else { setTimeout('checksize()',250) } }</"+"SCRIPT>"); 
w.document.write("<BODY onload='checksize()' onclick='window.close()' leftMargin=0 topMargin=0 marginwidth=0 marginheight=0>");
w.document.write("<TABLE width='100%' border='0' cellspacing='0' cellpadding='0' height='100%'><TR>");
w.document.write("<TD valign='middle' align='center'><IMG src='"+img+"' border=0 alt='"+titre+"'>"); 
w.document.write("</TD></TR></TABLE>");
w.document.write("</BODY></HTML>"); 
w.document.close();
}

}