

for(var i=0;i<16;i++)
{
document.getElementById("addcart").innerHTML += `
    <div class="col-3 pb-2" >
        <div class="card">
            <img class="card-img-top" src="../img.png" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Text</p>
            </div>
        </div>  
    </div>
    `;
}