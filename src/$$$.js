import React from "react";
import "./$$$.css";
import { Link } from "react-router-dom";
import Product from "./Product";

function $$$() {
    return (
    <div className="money__container">
        <h1 className="money__top">Merchandise & Donations</h1>
        <img className="money__imageRose"
             src="https://cdn.discordapp.com/attachments/869604147291357278/882385232274260019/163044595391699064_2.png"/>

        <img className="money__imageMid"
             src="https://cdn.discordapp.com/attachments/869604147291357278/882392974527438848/download_2_150.jpg"/>

        <img className="money__imageRoseRight" 
             src="https://cdn.discordapp.com/attachments/869604147291357278/882385565843062784/31050439_1630445953916990642.png"/>    
        
              <div className="money__row">
                <Product
                  id="12321341"
                  title='The Saint Nicky D Jacket: Limited Edition, Corinthian Leather Wallet Not Included'
                  price={299.95}
                  image="https://saintnickyd.github.io/project-test/img/logo.png.png"
                  rating={5} />
                
                <Product
                  id="49538094"
                  title='Donation: #TipsInTheHat  👍👍'
                      price={5.35}
                      image="https://panels-images.twitch.tv/panel-568153850-image-80aa6ba2-b78e-43a1-9f87-a4e9a1a4f4b1"
                      rating={1} 
                />
              </div>
      
              <div className="money__row2">
                <Product
                  id="4903850"
                  title='Two Hours of Tarkov: This right here is a bargain, we are 100% coming out fat'
                  price={30.00}
                  image="https://static-cdn.jtvnw.net/ttv-boxart/Escape%20from%20Tarkov-285x380.jpg"
                  rating={2} 
                />
                <Product
                  id="23445930"
                  title='OnTop Hat: We Actually sold out of the samples before we took the Photo'
                      price={95.23}
                      image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUWFxcYGBUXFRUVFxcXFhcXFhgXFRcYHSggGBolGxUVITEhJSorLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANMA7wMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIDBAYHCAX/xABDEAACAQIDAwgGBwYFBQAAAAAAAQIDEQQhMQUSQQdRYXGBkaHwBhMyscHRIjNScoKS4RQVI0JTsiWis9LxCENUk8L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDZR1o/aj3oDIDW/eFH+rT/PH5lZbUoLWtT/PH5gbYNJbXw7uvX0rrX+JHLxLLadD+tS/9kfmBtgwLGU9PWQv96PzMsZp6NMCwAAAAAAAAAAAAAAAAAAAAAfP2ttuhhletUUeZayfUj6B5y5UdqSnj6rT0bjrfKH0csugDs/HcqWGj9XCU+mT3V2WTufBxnKrVfsRhG+mV2uvefwR0xUxz1cpPh7Wve+j3FZ4+6tn0Z2000A7TrcpGJlf+K09U1upeCNWr6a4id71ptWvlN6dKv0nWr2m7/C/x16Sf3i+e614a+ecDnFfb9SWfrG31yk/FmCptSby3m7Wvm+q78DhEtoy58+qw/b3nbLTLzmBzF7Td9Wn26Pnssyr2y7N71ldWWdmuk4hLGviyHXbSA5PLa7bvvL6VrvXLzxIW0VpvZZ3Su/0OLqV9fh48xSNW2rXv6QOVft8V/M0+lvL9C9Pbso5qpJa2bcl8bHFowf2l39NtC+5de1msrZgcxo+mdeCW7iKy0/7knfqV8kfRocp+Mha2IcvvKLWi13tMzrz1a1v5XaUdgO28Byx4mP1ipzV+MGnbocWl4HOPRzlQwuJqRozTpTm7Ru04NvRb3Bvq7TzfvLXvXV19hv7JxO7Wp1L+zKMr6ew0/gB68BEXdXJAAAAAAAAAAAAAAB5T9Lq29iKss7ynJvhe7Z6mxlTdpzlzRk+5NnkrbtW9STXFvrA+bLTMwtK+pM7mJXAmolwZSUSzfm3vKsA2QmTcqwL38+eJZMxxefmxbz/z0gXi+HOWcG1p0lbX4mVJ2fiBipzt1/E3KM8su/Xz+hqQnnbzZmSnB/F2yAySs78fDLLgN1tcAlZ2Wfw8/Alyet8/KsBhNzDLM1pLz1G3h452y4ceb3AeuNkVt+hSn9qnCXfFM2z4/odUcsDhW9fUUvCCR9gAAAAAAAAAAAAAA+d6SV9zCYif2aNR/wCRnk3HyvNt8X78z1FygVd3Z2KfPTcfzNR+J5Y2hL6TXxA1Z+eBSUekXKykAZW4IuBD0FyblQLOPMZIpmKMjJfz1gXhkZIvPNa+fgYYuxldW/yAx3zfXc2qMsnbmz6TVks9f0yMtF5dXiBnjLj3vz1lW1w5vPgUjK2umvyDld20ysgLX8/qbGF9rz1GpZZ6m3gsmnbnA9Q8nT/w3DfcfhKSscjOJclcv8Npfeqf6kn8TloAAAAAAAAAAAAABxLlUq7uzavS4rxvfwPLteV2z0ryzVLbOa+1VgvCTXVmkeasRL6T62BhfnnKSJZWTAqgO0hMAxci4uALplUSmBkLQMcGZMgK1PiZKBjqZvItSyXG4GWV3foz79CIPPs+WfiGs/PiRDW4F4Ln5vNzawjzNS71M+Gav1+bAekeR6pfAW+zVmvCD+Jzg695E5XwNTT65/6dPU7CAAAAAQBIAAAAADrX055X8Lg26OHSxNdZO0rUoPmlNX3n0LvR03t7lT2pibp4mVKL/kofwkvxL6b7ZAdx8uuI3cHTin7VRu3VF/P3HnmofYw2LlLBvfnvOVaU3JuUptxjBLeb1PiVHe9gMTZVstYrICrZFhYhsCSBcICbligAyRZlSRrxZmvkBao9PEU5a85juTADNvZ36xcpctTkBebt1/P/AIMlKRr1pZkRnmB6I5B5p4WvbhWWf4InZx1N/wBPlW9DFR5qsH3wf+07ZAAAAAAAAAHQ/K/ymSnKeBwc92mrxq1Yuzm9HCDWkOdrXq17U5RdqSw2zsRVjlLd3Ivmc2oXXSk2+w8lVXdt84GvJlTJKJEaYHLcRsScNm4XFRScKvrVKyzjONWcVf7ScUvynG5PsOYbaxW5snZ9FS/q1JLplVm49yZ8LBU4VMpxv0rJ94HyXkROWZyGvsGHCUl0ZNd58etgXG92u7UDUuVZM424rxKASwiLi4EolBMlcNACMl/l4Fo4e/FLv+BsU8JDjUfZH5garYhxPuUdmUnwk+21uu3afQpbOoxz9VHTi3lqufo8QOKXHWckxSTVoJJ2yUUuHUfK/c9STvUnGCfO9526kB89zXOVhO7yTZ9V4ShBP2qj0XDPThwuWjj1FWW7Hnslm+qK6+IHa3JD6RYPAYaq683CdRwe7uTnJ7ql9lO1r+JybG8sWDjdU6Vap0tRhHvbb8Dz3V2hfi2+xfMxLEu+ni2/l4Ad34nlmqNtQoUo/enKp/aomKHKfjJvJ010RpP3ybOm6E6lSShCMm3koQTcn1KObO0/QbkpxNa1XGOVCnk1TverJc1r/wANdefQgOy/QP0jr4v1nrYLdja1RRcbvmd3Zvjl8Tlxr4DBwo040qa3YQSSWuS6XqbAAAAcU5UMC6uza6iruKjO3RGScv8ALd9h5WxWHcZOPN5R7Sq01JOMkmmmmno08mmecuUb0Ilg611G9CTfq6lrrPSnN8JLxt12DrWUXzGSis+HWzeq4e2TT68/DnMG60tM/cBO0ZzcYZ3ilZPhfVro5+0z7Jy1NX1slo73WaaTT6GnqZMPWpcfWU3z02px7YSt/cByqDvFvP5HHtqSfQZP22SyhiKckuE4SpSduy3ialf1slfcUvuSjP8AtbA+VVZjMtanJaxa600Y7AQCbCwEGagitOjJ6Jvp4d5u0MI+LS8f0AvHJG3Qot9Hnj0GOLhFcW+d+eorPHtaO3V8APq0LR9r39a82IntR2yztzO1u3n+R8OWJ4+/M1p1r8WwPq1dpvn6fo9Ctr2a5mpPGSf6593A01W6DJSw9Wfswk+qIEyk3q2U01aPtYD0Mxta27RlbndzlmyOR/Ezs6j3UB1zvrhm+j4H1dmbEr15JQpytztcOw7x2DyT4elZzSkznGA2FRpK0YJdgHF+TPZ7wtJQlhqUHb6yEN2pL771kdhwd80a0aVi8G0BsAhMkAAAIbPm7XpeupypOnCcJq0ozipRa5nF5H0miNxAdFbf5MsTTblhbThr6uf0rdEXLO3WzhG09mYik2sRhKselKTXero9WOmik6CeqT7APH05UW/alHn3rN9RSdGk81Psa85Hq/H+jGEq/W4ajPrpxfjY+BjOSrZVTXCxj9yU4e5gea/2eP249z+RV4eP2o+J6Br8imzX7Lrw6qt/7kz59bkJwj9nE4hdsH/8gdIxdv532OQ3o87fcvedzPkEof8Al1u6HyJhyC4fjiar/KvgB0tv0+jv+RCxVNcF2K773c71o8huDWtSq/xW9yPp4bke2fHWDl1ybA85VcffnKLESlpFvsbPUmG5Ntnw0w8O1XPp0PRPCw9mhTX4UB5PobLxNX2aNR/hZ9rA8nu0KtrUXFdOR6lpbKpx0hFdiNiOGS4Aed9ncjGJl9ZOMerM5Ps7kSorOpOUvA7kVMndA4Hs/kvwNO38JStz5nIsH6M4an7NKC/Cj7e6N0DWp4WMdEl2GZRL7osBUFrCwFCLGSwsApGQrFFgAAAAAAAAKyIJkQBIIJAAAAAAAAAAAAAAAAAAAAATYCpKRNiQAAAAAAAAAAAiRUsyoAkgkAAAAAAAkAAABAJAEAAAAAJRIQAAAAAAAAAAAAAAIZUAASAAAAAAACQAAAAAAAQAAAAFkAAAAAAAD//Z"
                      rating={4}
                />
                <Product
                  id="3254354345"
                  title='A Toy Whale(Out Of Stock)'
                  price={4999.95}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQir7GjGN4YaQGRZWIsqQJnr-jVV5Cfr4JBQ&usqp=CAU"
                  rating={6}
                />
              </div>
      
              <div className="money__row3">
                <Product
                  id="90829332"
                  title='Donate A Car to Me!'
                  price={129999.95}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3ZCYUPCZiirB7UfMXphcbBBdMV3AM8vuCg&usqp=CAU"
                  rating={5}
                />
              </div>
            </div>
        );
      }

export default $$$;

