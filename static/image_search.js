fetch('../static/images.json')
.then(data => data.json())
.then(Data => {
    let str = '';
    if (Data.length !=0)
    {    for (let z = 0; z<Data.length; z++){
            data = Data[z];
            str += `
                    <div class="row justify-content-center" style="margin: 20px;">
                        <div class="card mb-3">

                            
                            <img class="card-img-top" src="${data.webformatURL}"/>
                            
                            
                            <a href="${data.largeImageURL}?attachment" class="btn btn-primary rounded-circle"><i class="fas fa-download"></i></a>
                            

                        </div>
                    </div>
            `
        }
    }
    else{
        str = `<img src='https://lh3.googleusercontent.com/pw/ACtC-3cCAnIragkIIy7_qEkD1rSAyUa9R4pFJ4EaHIx2GYjysgRiaaLAUl-JJX15-ZmVcVHFfGg8FeZjzPKsJcuJO5VPCAH4k91B6jyF5gbSj1H31OlRDDXxM9A24FKPDBILdPw1N06o5iq3i9w65aKgIOpV=w1509-h938-no?authuser=0' class='img'>`
    }
    document.getElementById('result_container').innerHTML = str;

})


{/* <div class="card mb-3">
  <img class="card-img-top" src="${data.webformatURL}">
  <div class="card-img-overlay">
    <a href="${data.largeImageURL}?attachment" class="btn btn-primary">download</a>
  </div>
</div> */}



{/* <div class="row justify-content-center" style="margin: 20px;">
                    <div class="card mb-3" >
                        <img src="${data.webformatURL}" class="card-img-top">
                        <div class="card-body text-center">
                        <a href='${data.largeImageURL}?attachment'>
                            <button  class="btn btn-primary centre" >Download</button> </a>
                        </div>
                    </div>   
                </div> */}