let currentTool = "ip";

function setTool(tool){
  currentTool = tool;
  document.getElementById("toolTitle").innerText = tool;
}

async function runTool(){
  const input = document.getElementById("input").value;
  let output = "";

  try{
    switch(currentTool){

      case "ip":
        const ipRes = await fetch(`http://ip-api.com/json/${input}`);
        output = JSON.stringify(await ipRes.json(), null, 2);
        break;

      case "base64":
        output = btoa(input);
        break;

      case "decode":
        output = atob(input);
        break;

      case "password":
        output = generatePassword(12);
        break;

      case "sha256":
        output = await sha256(input);
        break;

      case "length":
        output = JSON.stringify({
          characters: input.length,
          words: input.split(" ").length
        }, null, 2);
        break;
    }
  }catch(e){
    output = "Error: " + e.message;
  }

  document.getElementById("output").innerText = output;
}

function generatePassword(length){
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let pass = "";
  for(let i=0;i<length;i++){
    pass += chars[Math.floor(Math.random()*chars.length)];
  }
  return pass;
}

async function sha256(text){
  const msgBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
