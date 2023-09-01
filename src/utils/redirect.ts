export const redirectUrl=(link:string)=>{
    let aTag=document.createElement('a');

    aTag.href=link;
    aTag.target='_blank';

    aTag.click();
    return;
}