export async function GET(){
 try{
  const response=await fetch('https://api.mcsrvstat.us/3/solarcraft.net',{headers:{'User-Agent':'PoPortfolio/1.0 (Minecraft portfolio server status)'},signal:AbortSignal.timeout(9000)});
  if(!response.ok)throw new Error('Status service unavailable');
  const data=await response.json() as {online?:unknown,players?:{online?:unknown}};
  if(typeof data.online!=='boolean')throw new Error('Invalid status');
  return Response.json({online:data.online,players:data.online&&typeof data.players?.online==='number'&&Number.isInteger(data.players.online)&&data.players.online>=0?data.players.online:undefined,checkedAt:new Date().toISOString()},{headers:{'Cache-Control':'public, max-age=60'}});
 }catch{return Response.json({online:false,error:true,checkedAt:new Date().toISOString()},{headers:{'Cache-Control':'no-store'}})}
}
