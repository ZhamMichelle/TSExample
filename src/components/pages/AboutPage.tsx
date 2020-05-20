import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () =>{
    function CallPrint(strid:any) {
        var prtContent = document.getElementById(strid);
        var prtCSS = '<link rel="stylesheet" href="/templates/css/template.css" type="text/css" />';
        var WinPrint = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
        WinPrint!.document.write('<div id="print" class="contentpane">');
        WinPrint!.document.write(prtCSS);
        WinPrint!.document.write(prtContent!.innerHTML);
        WinPrint!.document.write('</div>');
        WinPrint!.document.close();
        WinPrint!.focus();
        WinPrint!.print()
      // WinPrint!.close();
       //prtContent!.innerHTML=strOldOne;
      }
    const history = useHistory();
    return(
        <>
        <div >
        <h1 id="noPrintButton">Page of information</h1>
        <div id="print-content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit a modi neque ex praesentium molestias aut iusto quaerat debitis fugiat, nihil mollitia asperiores accusantium harum earum impedit at ipsa.</p>
        </div>
        <button className='btn' onClick={()=> history.push('/')}>Обратно к списку дел</button>
        <a href="/about" onClick={()=>CallPrint('print-content')} title="Распечатать проект">Распечатать</a>
        <div id="printButton"><a href="javascript:window.print();">Напечатать</a></div>
        </div>
        </>
    )
    
}