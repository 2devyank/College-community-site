import React from 'react'
import '../../styles/messageSection.css'
function Tempdata() {
    const eventList = [
        {
            
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Rajib Mondal",
            date: "20/12/2021",
            time: "8:50 pm",
            message: " Quisque velit nisi, pretium ut lacinia in, elementum id enim.Proin eget tortor risus.",
           
        },
        {
          
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Ayush Verma",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. Mauris blandit aliquet elit,",
        },   
        {
            
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Devyank",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. ",
           
        },
        {
            
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Rajib Mondal",
            date: "20/12/2021",
            time: "8:50 pm",
            message: " Quisque velit nisi, pretium ut lacinia in, elementum id enim.Proin eget tortor risus.",
           
        },
        {
          
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Ayush Verma",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. Mauris blandit aliquet elit,",
        },   
        {
            
            imageURL: "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg",
            userName: "Devyank",
            date: "20/12/2021",
            time: "8:50 pm",
            message: "lorem23Sed porttitor lectus nibh. ",
           
        }
    ]

    return (
        
        <div className="inputSection fluid-container scrollable-container">
      
      {
          eventList.map((event, index) => {
              return (
                  <div className='Messagecontainer'>
                  <img src={event.imageURL} alt="" />
                  <div className='MessageInfo'>
                      <h5>{event.userName} <span>{event.date}</span><span>{event.time}</span></h5>
      <p>{event.message}</p>
      
                  </div>
                  
              </div>
              )
          })
      }
  </div>
)
}

export default Tempdata
