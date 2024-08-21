export default function Options ({onUpdate,onReset,total}){
   return(
<>
<div >
<button type="button" onClick={()=>{
   onUpdate('good')
}}>Good</button>
<button type="button" onClick={()=>{
   onUpdate('neutral')
}}>Neutral</button>
<button type="button" onClick={()=>{
   onUpdate('bad')
}}>Bad</button>
{total===0?(''):(<button type="button" onClick={onReset}>Reset</button>)}
</div>

</>
   )
}