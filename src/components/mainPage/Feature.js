import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles/Feature.css'
import Button from '../share/Button';
import Routes from "../../helpers/route";

const Feature = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 col-lg-6 d-flex align-items-center feature-container feature-item1">
                <div>
                    <h2 className="my-2 my-md-5 px-2 px-md-5">CONNECTING TO TRUSTED PARTNERS</h2>
                    <p className='mb-2 mb-md-5 px-2 px-md-5'>Kielo Consultancy is the continuation of Phạm Hiệp Ltd., a family-owned company founded in 2009 in Ho Chi Minh City, Vietnam. Now that our family have relocated to Finland, we want to continue our business in the area of networking in trading activities, namely to help supply meet demands. Ten years of operation in international trade has equipped us with a deep understanding of different markets and a wide network with manufacturers in Vietnam.</p>
                    <p className='mb-2 mb-md-5 px-2 px-md-5'>At present, Kielo Consultancy has offices in both Vietnam and Finland. Kielo's partners are mosty based in Southern Vietnam and have been supplying to clients all over the world: the United States, China, Sinagpore... Europe is the our current target market. We promise to be a trusted partner for both parties: international clients in search of quality suppliers and Vietnamese enterprises in search of high-tech products (such as machines and devices) from European manufacturers.</p>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex align-items-center justify-content-center feature-container feature-item2 bg-light py-5">
                <div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row py-1 py-md-3 feature-list mx-1 mx-md-4">
                                <div className="col-3 p-1">
                                    <img className='mr-2' alt='kielo consultancy icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACvUlEQVRoge2YPWvbUBSG36MYB0/Bo/HmsQ00xSZt+gtaSCGLCbQpdDEyFFM6d9HYrRRDbZlCMtiG4LEffyH98DUZ4iW7h3awBR2KgqLTRSZBubKvYhtp0AMafHSudF5LV/e9B0hISEiIEoq6gCm1Wm3dtm0dwDMAm174DEB7Mpm0er3ehWxcLARUq9W867pfAdwLSDnVNG232WyO/Ce01ZY2n1qttj6neADYcl33c7lcTvtPRC7Ae21mFT/lfjabrfiDkQtg5uequUR04I9FLoCI7qjmMvOmPxa5AACXIXJdfyAOAoaL5MZBwIlqIjO3/bFIBei6vg/gtWL6wLKsT/5gZAJ0Xd/3/tGUQvrAcZynstV4bfmlzSegeAfAe2ZmItrwfgtmfmdZ1qtOp2PJrhVoJSTeRANwxswf8/l82zAMZ5nFE9GBaZrHYa8nFTDPmzDzz1Qq9bjRaEzC3GzZxQOSOaDiTYho23Xdb4ZhKM+hVRQPSASoehNmfjgajZRswKqKBySvUKVS+UFE24tcVIGlFA9IPmFhvMktuWTml61Wa+HigYjWAU3TlraRkgkI401uwxozH3qr8MLIXqEOMz9QGUxEL0zTvOFP/EgmcYqZ27quY9F5cOMJpNPpFoBThbEnuVyuq3IT0zSPvc3I9cVvKmKhJzFrIfsCYEs6iOi7bdtPjo6OpMt7EKv4nEq9UL/f/1soFA4zmcwfAFnvcAAMiOjteDx+0+12/4W9mRBiWCqVzgHs4erpawD2SqXSuRAi9PyLpK0yw8x9ALAD4K53Lr59oZB2On59oYCJHURgXyiS/cAUIcSwWCxuAHikkJ7LZDK/hRC/rgfjsCfeUU2MZV8IV43cucS1LxSmhqQvtHSIqKOaG7u+EBDKe8WrLzSlXq/bmqbtYraIePWF/AR4rwso9IUSEhISouU/Kd9imD2hW48AAAAASUVORK5CYII="/>
                                </div>
                                <div className="col-9 my-auto px-sm-0"> 
                                    <p className="bg-light px-sm-0">
                                    Working directly with suppliers
                                    </p>  
                                </div>
                            </div>
                            <div className="row py-1 py-md-3 feature-list mx-1 mx-md-4">
                                <div className="col-3 p-1">
                                    <img className='mr-2' alt='kielo consultancy icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFR0lEQVRoge1ZbYhUVRh+nnN3KdZam+rPSgZGLpQfyM6fisRYNDFx/VjHwvpRy5x7YcWfUvZrzaLQRAha9547qAQZlahERoEFmYUmY+VmH7IQFLZE0briaowz9+3H3HGvs6u7c+8dCtkHhrnnPed9z/PMue/5GmAKU5jCjcCojrZtrwLQmCAXALhijDkUxbEhRqd7ANwRw388nAcQSYhKmMh/hjgjEsaPJC9FcRSRJgAPxCWQiBARWW+M+TaKr9Z6Aclv4nK4aV6tpIRss2373lqdAp9tSRCII+Ry5YHkEgD9WmuNyU3pDNr2B75jYtaKyDliWdajpVJpN4BFgamZpHEcp9OyLN3b2/vbeH7d3d0zS6WSJyJLq6o+tyyrKyqfyAtixd9xHC0iOwDcFrJfILnJdV0PgFSMtm1nALgAUqG2l0luaWlp2d7T0+NHJhLVMYxsNjvLsqyciLRfE5z8xLIsXSwWiwD6AHSE60XkSwBdnuedjcshESEA0NPTowYHBzeIyKsApoWqhoPv6SHbCMnNLS0tb8YZhTASE1KBbdsHAayaoNkhY8zqJPudWkf+b7hphCS1abwKEdlOch9JJSIGQHNQdUFEHJIlETmXdL+JJ3sFWuunSL5TZX7aGLOvHv3V69UiyRfHsfdkMhmrHh3WRYjWeg2AeUHRDz4AMDuVSj1Zjz7rIYRKqc2VgogcILk/VF+XUUlciOM4HSKSDooiIq8B2II6j0qsZO/u7p5ZKBRmK6Vmi0irUqpVRB4CcHfQ5ANjzEoAcBznXRFZF9j/BnBCRAZIDpAc8H1/gOQvxpgrUbhMdvql1joDYF5AthVAa7FYbFKqPKgkISLXOInIy1cDkFtFZC3Kb8GdAJaRrLRD8Fy0bftXAAMkBwD0u67rIrSDvh4m+2oJyQLJTcGvugBA0wQ+hz3PO1kp9PX1fQ/g4AQ+DQDuA/C4iDxbKpXOYhIigBpyxBhziOQqjD3F/QPgGIDdJF8g2QlgfqFQWFsdo1AoPCMicwGsBvA8gByAowCqb2Au+b6/IpfLfTZZfjXnSDabXaiUOgzg9sBUItnluu5btcYCANu2lwPYD+DWwDRCcqXrup/WEqfmWSuXy31Bsh3lhAUAS0R2O47zXK2xghPjQYyKGCa5pFYRABBpPs/n87+n0+kjADpRzhUFoCOdTv+Vz+dP3ti7jGAL8zZG74+HlFJLXdc9EYVT5IUpn88PptPpjwGsQfm8TgDL2tra/jx16tQNxWitu0juweis+QeAdtd1I1/UxVoQjTH9AB4DUNnNkuSYJB8HHRj9Ec9ZlrUoiBUZsVd2Y8xPJD8KmSYkRPJ0qHhs165dP8flkcgWxff9B0PFH6qqOc7eKix2HhJAIkJIzgkVz1QetNaLtdbHU6nUaa11J4Lp3rKs8Ii0bty48ZbYHOIGyGaz9yilrt4qlkqluxobG+/3ff8VAIurmvcD2Do0NHQglUoNI7g2IrnAdd3v4vCIPSJVozHS0NCQ833/OMaKAMqv0XupVOoogIsVo+/78+PyiH1mJxnOj2kics19VXCbOEzyiZD5kaoYc+PySCJHrkfiDIB1nuct9Dxvue/7D5P88DptYyd8EkLmVJUHSK6fMWPGfGPM+wh2r7lc7rjruisAtAP4qsontpDYt/G2bV9AeWU/R/IlEdkzmcOR1nqZUmpr5TRZKBRSe/fuPR+ZSFRHoHwLr5T6muTrTU1Nb+zcubPmP2q01otJ7gCwwRhzLCqXWMne2Nh4nuSs3t7eixO3Hh+e5x3JZDJtzc3N0yduPYUpTCEq/gWns8Xe8+uBygAAAABJRU5ErkJggg=="/>
                                </div>
                                <div className="col-9 my-auto px-sm-0"> 
                                    <p className="bg-light px-sm-0">
                                    Product quality of global standards
                                    </p>  
                                </div>
                            </div>
                            <div className="row py-1 py-md-3 feature-list mx-1 mx-md-4">
                                <div className="col-3 p-1">
                                    <img className='mr-2' alt='kielo consultancy icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFzUlEQVRYhc2YXWwUVRTH/2dmutvSCqmE0hYMsQRUEkSUIH6gBjWowYAxRSU0oYHe6dYUg7FvPqwP8qKh0ep2Z9oC6pM0qAS/Ek2MiVrgQcCPgsaioG1FJcUA0m5n7vFhZ5c7093ubFqJ/2STveeec+5v58yce2eB/7louhJt3bp1gWEYCwDAcZzTPT09p6cj75QA4/G4MTw8HGPmVgCLAtM/AugYGRnp7O3tdf9zQCGEBaAyYL4BwM0FQo8jDXtlUaLzlmWJMOsaYQGZeTER3RfWX9Ey76Pm+ixssBbaUdOOTzLdz8xPSSnrdF1fSESbAPTncyaib8KuG/oKIl2qrJj5ABGlmPlcSUlJWyKRuKhMn2ppaTk4Pj7+EhHNZuYIEa3Pl2taAJnZl1TX9ReSyeTRfP4ecAwAhBC3AsgCEtGxsOuGLnE0Gv0ewHhm7LruskncfSIi1dcZHR09ETY2NGBHR8cYlKcxsGghqb4n9+7dOxo2MDSgJ7XMoQGllFlfIgp9/wHFPSRAGnCT932ZEKI+ZFy2VzJz6CcYKBKQmY8TZXv7tQD2FRPvKfQDAhRZYinlQHEsE+W67qli/EMDNjQ0lOu63lM8kl+6rr/Z2to6M6x/qL24oaGhvKys7EMA9yjmU7quP9LZ2fnDZLGxWKzOdd2PACxWzH2O46zdvXv3hSkDtra2RlOp1CfMvDpjY+YjjuOs27Nnz5+F4gGgubm5ynXdg0S0UjF/Ho1G13rtK68KlnhsbOw1FQ7AYdd1HwgLBwDJZPKP0tLSB5n5iGK+d2xszCoUO+kVNE2zmZk7FVO/rut3d3Z2jgR9hRAzmPlhAHcSURWAFIAzzHygq6vrGADEYrFK13W/ALBECW2ybbu7aEDTNBcx81EA5Z7pHIDbbdue8CQ3NTU9RkSvA6jJkeoZ27ZfVX7IQgCHAcz2TBdd113e09PzUy6OvCWWUtoKHBPR5jxwTxLR/jxwICLfvmvb9gARbQbAnqnCMIy8pc4JKITYEDic2pZlfRz0a2xsnENESVypBAN4j4hizNzIzLt0Xf82GOflsjNjZl5jmuajuVhy7SQEYKcyHjYM47lcwZFIpIGZZykLmV1dXV25fINyHKfNMIz1AKq92J0A3seVK5uF8ck0zfuZ+dOsA9F2y7I6Aj7PMvMqAHcBqPXM/wD4wIs5ZFnWrkKQQojtAF5RTGts2/a9DkwosZSyWRkORiIRO+jjwdUrcAAww7PVe/MFlUqlbABDmTERNQd9fFcwHo8bQ0ND5wDM9AJetiyrLd8CQggX3o8koscty3onDFggxy4AO7zhBQCzbdvOHox99+Dg4OBKIsruk1LKd3MlNU3zDmaeD6UCzLxKCKF7sL9ZltUXBlDTtP1SygzgNUS0AkA21lfiwFZ0ft68eYdyJWXmHZh41GrzbPu8+VCqrq7uA/B3ZiylVBn8gMxcrQxPxONxmSspEbUD2Ih0w81olJkbAWz05kMpHo/LQK/09VMfoKZpc5Vh3r3Wsqw+27Z7mTmpmEuJ6AnHcb7MlDcejxv19fV6IUhmzq4VYPDfg8ysPjQFTzoVFRVvX7p06XkACz3TQ4Zh/CyEOAnAHRoaqqusrFwNYEKzVkVExMy5GCa0mb+UoDmFANvb2y9rmrYBwFnFHEH6HWQ5gFnMfFOhPFLKKmVdX+WCgGcyX5h5qRCipFDyZDL5nWEYtxBRAukDhU+aps2fLF4IUUJES5V1fX/bBQHVLl7OzOsKAQJAIpH43bKsp2tra6uklHVSyhW6rt8YjUZnFdpRvL9EyhRA304SvM9ICDEA4Hpv3J9KpW4r5kW7GG3ZsqU0Eol8DSBzGwzYtr0Iyn4cPCww0geFzIa/JBKJXBYi1F95UxYRvYjAYSHXcesN+Pvb1dJXNTU1bwWNOVvJtm3b5mqadhjAgv8cK61fpJSruru7zwYn8va6lpaW6xzHCXUqmaoMwziUSCR+vRprTbv+BbkINlJU/n7hAAAAAElFTkSuQmCC"/>
                                </div>
                                <div className="col-9 my-auto px-sm-0"> 
                                    <p className="bg-light px-sm-0">
                                    Optimized cost-effective logistics
                                    </p>  
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row py-1 py-md-3 feature-list mx-1 mx-md-4">
                                <div className="col-3 p-1">
                                <img className='mr-2' alt='kielo consultancy icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADsklEQVRYhe2YT2gcVRzHv78328RgU0g8iLFgmouemxIoKJYqWKGoQVewFzGd93YSiP+hejHbg2BpaaULYebtJgF7ka7QFYpeqgRaCDQGvanQQyk1B5WAMYdOd/f9PLgTxyUzuzMhu6X0e3rz+/PmM7+3+/4BD3Sfi1oFOI5zyBgzDuCxFP0vaa3PpcjbVCygUuoDAKdbxbXQSa11Pm2yFeWwbftRIroMIJO284YOjY6O0srKymKa5MiXE9F+AD0hUzlBv3sBHAw9zyilkKaScYC7w89a69fb7VQplW0CBIAZKeVDxWLxoySAIknwdkVEJ6SUnyXJ6SggkByy44BAMsiuAALtQ3YNEGgPsquAwCbkC1H+rgMCABHtifJtd5XYUlrrMlovo9xOX/dEBeN0zwPuyBC3qdtEdIGZfyWin6KCugk44nletVVQKkCl1EUA2QQpBsCnWutPAoPWuiUcsPMV3GDmBWPM+bm5uRvNzmw2aw0ODo6tra1dL5fL9U4DLgkhsq7r/tbsmJ6e3uP7/nEAbzPz8MDAwE2l1Pne3t65QqGwvm1AIjrHzLEb2Gq1uriwsPBH2OY4znC9Xp/2fd8GEJ6chwGc9X0/L6UsWZZVcF33JhAzmTY2nReDZ6116nOJbdujQoh3ALyB9opiiOgbZj7VkX+xEOKHrexEdBX/HiWyzPxMOIWZjwI4mgowl8sdZOa9UX4iuu153lKEu8rMXwkhznqeF4AXcrncAWPM+0T0GoBdQXAqQGZ+DzHTTOP3uSUgMx8vFosXmu0N2GNSym+J6IvA3o0t/50k/vtzLU5yBG3obwD9AMDMD8cFMnM/0eaEsd6pCq4GDSHEvrhAIhoO53UEkJl/CdrGmCMtwl8MGkT0c+QQM/NGqNTBBqFt1Wq1d+fn54PKVQC83HjpmG3bh0ul0vfNOVLK5wEcCJkqkYCWZa0YY+7iv/uZJLsXWJa1CGC2AXUJwBkAjwCAEKI0MTHxdOgD4DjO48aYUqiLP3t6eiqRQ+y67u9E9DGAts4OW+jNoKG1/ouIToZ8+zKZzLXJycknAUAp9ZQx5iqAJ4IAZp4pFArrLddXKeWzQohxZh5KAfmh1voWAOTzebG6unoJwEsh/x0AXwN4BUBvyF4ZGhp6NZ/Pm+1cTCbW1NTU7lqtVgHwXEzYlUwmMz47O7sBxFxg7oSWl5fvjoyMfNnX19cPYAz/303VmflzInrLdd3N1aSjFQxLKbWfiE4w82EA3wkhTrmu+2Nz3D/ErkcdUwliJAAAAABJRU5ErkJggg=="/>
                                </div>
                                <div className="col-9 my-auto px-sm-0"> 
                                    <p className="bg-light px-sm-0">
                                    Up-to-date custom policies
                                    </p>  
                                </div>
                            </div>
                            <div className="row py-1 py-md-3 feature-list mx-1 mx-md-4">
                                <div className="col-3 p-1">
                                    <img className='mr-2' alt='kielo consultancy icon' src="data:image/png;base64,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"/>
                                </div>
                                <div className="col-9 my-auto px-sm-0"> 
                                    <p className="bg-light px-sm-0">
                                    Kielo offices in Finland and Vietnam
                                    </p>  
                                </div>
                            </div>
                            <div className="row py-1 py-md-3 feature-list mx-1 mx-md-4">
                                <div className="col-3 p-1">
                                <img className='mr-2' alt='kielo consultancy icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAADGUlEQVRYhe2XT4gOYRzHP7/BWzalNyvtKwcHLi4OwmFpb8L5JSelnZm3LeRPKJf3pPxpl7ZV87wvCQnrguLkIKkVwsFJUujNicu+rJbn57AzmtbMvq93Xqx6vzU1z2+e5zOfmed9n5mBTjrp5P+ORDulUmmpqq5T1Tltg4vUc7ncveHh4a+tMuZGctbal8DCdskBqCoTExN3gK2tMpwQtI42y0URkU1ZxkeCbZvWhGRiz00qGmMkqd5sPM8rAtezMKIkCrY7ofAvUVUrIu8LhcLTcrn8LanPXxEk5W6KTE1UrVar+b5/OAiCy9P7NBT0fX+/qq4PgWNBEAxGxzzP+3lia+1gtVoda0EeoKCqlzzPW2iMGYkfcBqNDOWKQDESjaUYbY7jLGtRLp5B13VXxQt/ZYrT/nSe581j6gIvAPOAnIicBfoAhSbu4J+MMWbSGHMFOB0rb3Rdd2fU+KeCsZSBN1FDRE55ntcNs0TQGPNZRPbFSotE5BjMEkGAIAhuAreitqr2l0qltbNGMMxuoB7ui7X2YENBERkDRoHRcD+e0Wiz1r7LameMeQucjZU2NFxm4gtzAnBbVqnpUdUn0RMGWNJQsL+/f7njONuBlao67jjOs66urqtDQ0NfWhFoxBMRjXWXVMFisTgnn88fB/YSLugigqpSr9ePu667s1Kp3G1WrFVe6m8wn88b4ADJT5vFInLL9/0tzQq2yhNIfH87BJyItb8AD4FuYHWsXlPVfdOmBVVdLyL7W+EB14Cfa2KaYDwfgF5jzGsA13V3ici5lL7N5Ld4Dkx9fc0APBPBACqVynngeQbB3+GNOwC5XO6eqt4Bvid0+jS9ICIfMwg2yxsHjqa9Bj0G1oSDH/T09PSVy2UL4Pv+ClV9AcwPux8yxpycySgLL22ZuR4BVXVDrVa77/v+JVXtVtU9Mdh3a+2NmeSy8tIERwAXWBG2e1W1N6Hf6Wq1+iah3jZe4jpojPkMbAZepZ1RVS8WCoUjTchl4s34/TswMLBgcnJyt4jsYOrqJ0TkETASBMHtZuT+JK+TTjoBfgDGpHajB1Bi6AAAAABJRU5ErkJggg=="/>
                                </div>
                                <div className="col-9 my-auto px-sm-0"> 
                                    <p className="bg-light px-sm-0">
                                    Wholesale and sample purchase
                                    </p>  
                                </div>
                            </div>
                        </div>
                    </div>         
                    <div className="row">
                        <div className="col-12 ml-lg-4">
                            <Link to={Routes.quotation}><Button text='Get quotation' type='button'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Feature;