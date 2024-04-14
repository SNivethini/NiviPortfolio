import React from "react";

function Experience() {
  return (
    <div className=" ">
      
      <div id="exp" className="xl:clip-your-needful-style bg-gradient-to-r from-[#120029]  via-[#27124d]  to-[#120029] to-90% text-[#b1b2b3] py-[100px] ">
        <div className=" "></div>
        <div className=" max-w-[1300px] mx-auto w-[88%]  ">
          {/* <div className="absolute top-[100px]"></div> */}

        <div className="pb-10 font-extrabold text-xl">
          <p className="flex justify-center">Experience</p>
          <p className=" flex justify-center">My Working Experience</p>
        </div>
        
        <div className="px-[10px] flex justify-center gap-[10px] xl:px-[210px] ">
          <div>
            <img
              className="rounded-full border-4 border-purple-950 w-[90px] hover:animate-bounce"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGR8XGRgXFxcYGBkaGBgYHhghHyAYHSggGB8mGxoYITEhJSkrLy8wGyAzODYsNygtLisBCgoKDg0OGxAQGy0mICUtLzUvLS0tLS8vLy0wLS8tLS0vLS0tLS0tKy0tLS0tLy0tLS0tLS0tLS0vKy0vLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABJEAACAQIEAwUDBwgIBQUBAAABAgMAEQQFEiExQVEGEyJhcQcygRRCkaGxwfAjM1JTYnKC0QgVFjSSouHxJENjc7JUg5PC0hf/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAwQFAQIGB//EADoRAAIBAwIDBAgGAQQCAwAAAAABAgMEESExEkFRE2FxkQUiMoGhwdHwFCMzQrHhUhUkYvE0knKCov/aAAwDAQACEQMRAD8A7jQCgFAKAUAoBQCgFAKAUB5dgBckAeddSb2ONpbkKbOsOvvTxD+Nf51LG2rS2i/IryvLeO815ojN2nwg/wCev+Y/YKkVlX/xZE/SVqv3oDtRhP16/Q38q7+BuP8AEL0nav8AeiRFnmGbhPF/jA+2o5WtZbxfkSRvbeW015omxyBhdSCOoN/sqFprcsxkpapnuuHRQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQGDF4uOJdUjqg6sbf717hTlN4iskdSrClHim0l3lR/X7y/3WB5B+m/5OP1Bbdvoq1+EjD9aaXctWUfx86v/AI9Ny73ovjuff6vxcn53EiMfowLb/O29O2t4exDPfL6Ifh7up+pU4V0ivm9T0vZbD3vIHlbrI7MfttXHfVdo4XgkdXou3bzPMn3tsmw5Ph192CIeehb/AE2qGVxVlvJ+ZZjaUI6xgvJEpYFHBVHwFR8TfMmUIrZH1oVPFR9ArnE+ocIvkRpsqgf3oYj6ot/sqSNerHaT8yKdrQn7UE/ciDJ2WwxN1Qxt1jdlI+g2+qplfVsYbyu9JlaXou2bzFYfc2jx/VWJj/M4pmH6M413/iHiFeu3oz9unjvjp8Njz+Fuaf6VXPdLX47nz+uZ4v7zhmA/WQnWvqR7yin4anU/Sn7no/oPxlal+vTeOsdV5botMBmMUw1ROrjy4j1B3HxqtUozpvE1guUbilWWackyVUZMKAUAoBQCgFAKAUAoBQCgFAKAUB4mmVFLMQqjckmwFdjFyeEtTzKcYLik8Iojm02I8OESycDPILL/AALxb47Vd7CnR1rPX/FfN8jO/FVrjS2WF/m9vcuZIwnZ6MN3kpM8v6cm4HovBRXid3Nrhh6q6L6klL0fTUuOp68ur+S2RcVUL4oBQAGgKXNs7UYeV4mBZWMXo44/QN6qV7lRpOUd8495BUrLgbj4e8i9jsa7KY3JYrupJubHj67/AG1V9G3TnmnJ6rVeB5tnLhwzYe8GrTcarXtztWj2sOPs8rixnHPHUtcLxnke6kOCgFAVWYZBDIdYBjk5SRnS3xtsfjVmldVILh3XR6opVrClUfGvVl1Wj/v3kQ43E4b8+vfRfrYxZ1H7a9PMVL2dGv8Apvhl0e3uZB21xbfrLjj/AJLdeK+hc4PFpKoeNgynmPxsfKqk6coS4ZLDNClVhVjxQeUZ68EgoBQCgFAKAUAoBQCgFAKAgZtmyQAars7bJGu7OfIffU9GhKq9NEt3yRWubqFBLOreyW7K+DKJJ2EuMINt1gHuL+9+m31VPK4jSXBQ98ub8OiKsLSddqpde6HJePVl8osLDYVRNNLGiPtAKAUBrva/NQkZiVvG+xA4hTx+nh8TWff11CHAnq/4KtzVxHhW7Ndyrtc6D5Oy7BHCtvcNYd2PQeL6uFt4KV1KnQ11wtPkVqV00uBkHBg6TH81iJPiqkfWG+oVl1Kr7PHevn9TlGDfq8jZcrcRMrcuB9DWfa3/AGFzGb22fg/vJu0rXMCNicxYSd6u5uSPSxsPotXKdxUd1KvnDz/XwWhodkuzUeRMy/PO6gkaRrkeJQTuS17/AAvW96OupRpzUnl50z3/AHkinaOrUiorfcy9iu0BxSyq27RsN+ofVbh00kfRWtbTlKPrbnn0lZq3cXHZ/I2WrBmigFAUmNyQqxmwrCKT5y/8uT94cj5j/WrlO5Uo8FZZXXmvAzqtk4y7W3fDLmv2vxXzM+U5wJSY3UxzL70bcfVT85fMV4rW7prii8xez+9mS214qrcJLhmt0/l1RaVWLgoBQCgFAKAUAoBQCgKzOc17nSiLrmfZIxz8z0UdfwLFCh2mZSeIrd/fMp3V12OIxWZvZfN9x4yfKO7JllbvJ295+Sj9FOgH1/VXqvcca4ILEVy+b7zlradm+0qPM3u+ncu4tqql0UBixbsqMUGpgCQOpA2HxrzJtRbW55k2k2jR847QJOiSRu8Uq8UBYBg1r2K7G3nba9ZVxcKpFSi2muRm1blVIpxbT6FfNnuJZFXvSCragw2bgRYkcRvzqv8Ai6mEm9iN16kklkjyYx5mLybvsCbWvYbcPKoLio5y4mcU3UeZbmGXC3ZG6MN/Ln9tRwqYjKPVEkabckbFhY1Uaedv9Kxbio28m/aWySPqvxHTb+X1VWcc69TUisIjRPYHhsx+gE1pU6Lk14L+AtdjU+0mbXui8K37agorJr2lvhZZXZR2jlw0UyQnS8xXVJzVUDbL0JLHflbbfcX4ycVoS3FnTr1IyqaqOdO99fLYi5VgWxOIRLkvI4Bc7sLndrnckC5+Fe4Ryz3XrRoUnLklty8D9DRpYADgBbffhVo+Dby8nqhwUBXZxlKzgG5SRd0kX3lP3jyqehcOk8bp7rqVbq0jXSecSWzW6/ruMGT5qxYwTgLOovt7si/pL94/1t7r0El2lPWL+HcyK1upSl2NZYmvJrqi4qqXxQCgFAKAUAoBQEDOczECaranY6UQcWY8B/Op6FF1ZY2S3fRFa6uVQhnGW9EurMGSZWY9Usp1Tye+3JRyVegH1/RXu4rqeIQ0itvq+8jtLV026lTWct307l3FtVUuigFAVGb9oocOwWTUSeOkA6fXe45VBUuIQlwsr1bmFJ4kc+zN4WlZoGujeLSVKlSeI3FrdLVj3CipZhszKm4Sk3DYwLILX5Dj5VWcXnB2LySMJZjceh+41FUTjoyekuJ6GbGYhRG456TYftDa1QwT449M/Dc16FHC1KKLtQ1432C61Bvx0SWBBABIYSWFzYEG97b1Zn6Oi1KHPHxXya96+Bfp1GsP7+8k/Je0kbSPrZVDMSCWAvYi1gd7aWjF+ZvXip6NkoRUVsun3zySwrJt5KyTP7xluDMzWHMAMRv57VpxtVFpLkl/Bo2MFJccu812aXUb1ZisG7FrGh5Rb1PGB4nPBZ5Vmz4V+8i069JUMRfTq5jle229+NaFvQ4jFv6kai4Xsbj2DzLMMXibnEN3SWMuoLYgnZQNNgTblawB9DbuKdKnDbV7Hz9SVPaKOpVnEAoBQFdnOVidRY6ZEOqNxxVv5HmKnoV3SfVPddSrdWqrx6SWz6P6dTxkeZmQNHKNM8ezr16MP2T+OVeriioYlDWL2+nieLO5dROFRYnHdfNdzLSqxdFAKAUAoBQHiaVUUsxsqi5J5Aca7GLk8Lc8zmoRcpbIo8khM8hxkotfaBT81P0v3m+yrtxJUo9hD/7Pq+ngjOtIOvP8VUX/AMV0XXxZf1RNMUAoATQGi9vcCA6zAr4hpYX3uvA+e23lYdayr+niSmuZmX1PVTNMnXbUvEVUg9eGRn4zqhhp9RupseY62rtSHCsNaE8IvJ5klujhC4DqwOgaiLgglbG4IJGw352qOXqtcWG01vp5/fvNi2t+ZixuELhgzXDCxve9tBAIYHxG4963McCoJjp1sP1Vt9enLw+TNRUtCBNgtNrqVLDc2UW3uBvfWLvIPQgcat0p8T0ecP78NEvidcH0I82KZdtOkcLMwsLcrcgNrbcAKtwhHxLFOhPmseJQ4nFEseHCwPly48NidjVlRJO1cW492/8A33N78zJDiLX1HYc+QA+NuXHzrsYZLtG7VOT7T/ru+/AmpNt4av0LfiPNa9TTYJrXp0lFYR89c3XE9C17K5nHhp1mkjMgU3AD6bHqbjxW5DbeuVqPFBpPBQVRt6ncMjz/AA+LQNBKrbXK3Gtd7eJb3H38qxJwcHhlhFnXgCgFAU2f4FrriYR+Wi5frE+cp69R51btqsdaVT2X8H1M+9oSyq9L24/Fc19Cwy7GrNGsiHwsL+nUHzB2qCrTlTm4S3RboVo1qaqR2ZJqMlFAKAUAoCgzk/KJlwi+4LSTkfoj3U+JsfSr1D8mm6z32j837jMuv9xWVstlrLw5L3l8osLDYCqJppY0R9oBQCgNe7a4IPB3hcr3e9tyrXsLWHO9rHzqneUlOGW8Y8irdw4oZzjBzhpB0tWOoGO2ZFlsPdua8uGu5NAoszhjkJAEgK7nu2AJtfYA8G25jnx3q7CpOnHLa16/exp2tDmy0hwz3BCMSfECzbnUW2YbA6fDxF916G2ZOrB5zJafLo+/y37jbp0mtkfMdmARTI27WLL191uNth0AO+1vOlG3cnwLbn5rb7xzJnLCyadmWcSSMxDsBxsQm1ibHYcRYWOx8XHrvUbeFOKWP5I/Xk202vLv/rG2+5UTzO3vE/i30/68rircYxWxDUqVZaN/f38XpjKz6SXa2na1uFrnkfs4U4eZ7VwklHh0xjp4P64MrEXuD6ceG3nw26X35VLCJ5qVE3lffx/syYOQqxHBepI434D141p2r4ZYexRq1HjCLKOMtw3rRyuRTaZYQZOW3aoZYe56zw7FrkuXrFMkjd4FU3vGwR9uhI+nhUU6alFqPxInXw/WZ2jK8yjnTXG1xwPIg9CORrIqUpU5YkW6dSNRZiTKjPYoBQGvw/8AC4rRwhxBuvRZeY8tX21el+fR4v3Q371/Rlx/2tzw/sqbd0unvNgqiagoBQCgMGNxKxRtI3BQWPwr3Tg5yUVzI6tSNKDnLZIruzGFYRGWT87Me8byB90egW23masXc058Edo6L5lT0fSkqfaT9qer+S9yLiqhfFAKAUBW5zicPoaOeRQGFiLjV6gcb8xtUFadLhcZvchqyp8LjNnNZ4UDFVbWgOzWIuPQ8KwJvhk+B5Rk8Ec43RjcIBfWB0vtvy9a8Zm3sW6NLLIOHuT4mVtII7xGBkBZE8KhVDDiTvvsu1jccrtcljPJrTRvV5bXd73z0e9QhhE/EyrF+UJVBuWJa3DY+h93y4mqdODq/lrLenL3+W/fyL2kdWc9xchYizX23A2A97iASN9V9rCwHrX1FOPCtvvTuT/nUjo0XN53+3vv8tEYSg9OP1/jlUyLjgtnp/f3yPIh3/H4/H0es5PH4d/f397Z109GEW6H8eY8/wDSp4QcipVgkun37iJNJyttxv8Aj+dT44dMGfOeTxbVtfY7/QRw2Nzfp0Ne99M6ELN47JYPvIg7fZYVdp1XKOpDUkomxyWQbDf4ffUiTZRqVinnx73vZNt7X1X9eFSRjJlWdSJ2fKpNUMbBUW6g2jIZBf8ARIAuPhWFUWJNPPv3Nym04JrHu2JdeD2KAUBX59gO+hZBs48SHo67r6b7fGp7ar2VRSe3PwKt5Q7ai4rfdeK2PuR4/v4Uk4NazDow2YeW9cuKXZVHHy8DtpX7eip8+fjzJ9QlkUAoCh7SflXgwvKRtb/uR7kH1Nvoq7aepGdbosLxZm3/AObOnb/5PL8Fr8S+qkaQoBQCgPMi3BAJFxa4tceYvtXGso4zmvaXKmglF2Mivc6zuwI4hvPfjz34ViXNv2TznOfMybijwS3zkj4fDniLVlVKqWjySUqRLnjKoTYEnkRqB+AqkqilNLOO/Y2bWg0smv4BiQC7ENyDa1ZQfeHGx3S/AchZav11HL4Vp3Yaf2n/AC8s0KSfMi9opfyZ0E2uFLeIOeB24AW233+d51PY03xrjWvTTHv+1yJ3ByWhpveEksTe+/rc9D1+nhvzO6opLBYpaa7/AH07/Pm2t3kRPxby8/5869FqMNPv7+K0ZnRR+P8AThVijRciGvVjBbkTEPWpToqJ87cXDm8IhvH+NvLr8K5Vgt0VkyTHA1wCN7jfkBYE+hAF/wDeoJZzhhtG4dknZIm1aRcm1tRvxt7xva1gLjhVq1g2jPuqqWhmxuJZjs31A1oRpmXOt3EOGGaRgiBWdtluQtz/ABECuzk6ccs8wjGrLh+a+Z2fsrlfyfDIh1Bj42VmD6WYDUoKgCwN+HmedfP3FZ1Z8TPobeiqMOFfEt6hJxQCgFAUOXfkcZND82Ud+nTVwkHqdjV2r+Zbxnzjo/DkZtD8m7nT5S9ZeOz+pfVSNIUAoCiyz8pjMRLyjAgX4eJ/81qu1vUt4Q66v+EZtv8AmXdSpyjiK/l/EvapGkKAUAoDDjMMJEZCSAwtdTYjoQfWvM48UXFnmceJYNDxfZiaEs20iC51DYgeYO4+F6wbuzqU05LVIz/wsoPO5kwcO1fN16ho21LJ6xj7WBt51VpLLyzdpw4Y4Rqu93BZ233Zr2PhUcCTxv8ANt6Vvximk0ku5cteuFt358TkYvJq/aDE3sOGmwHIEAjiCdN7/RWza0lHXr9+JbdNRgm+unTTxeMlRCCeX4O/31dZ7ptvVr7evz8PNk21hU9Ci5s91q6hHBgkJBvWxSo8J83c3Lm9yK+9TSWhSyS4MLdTcgcgTw32H1m3lf4VFU9n7+/v3HlPUkS3AKLdb7tsEtwvc3vuLEA7j4VBwN6L6EcqiWr+pLyZ2CsPEFvcXAtuTzHE+fpxq/aRaXcZV5PL7yczVdM895fhWxEiwx2LtwBIA89z9nGvE6saceJnunQnUlwxR2Dsrlc+Hi0Tz96eQ3OjyDNuw+AtXz9zVp1JZhHHz9x9Ja0qlKHDUln5e/mXVViyKAUAoCi7TeBsPiP1cgDH9iTwt91XbT1lOl1XxWqM30h6jp1/8Za+D0Ze1SNIUB8drAk8BvXUsvBxvCyUvY9T8mEh96V3kPqzH7gKt3z/ADeFckl8DP8ARabt+N7ybfmy7qmaIoBQCgFAR8diljW535AdTVW8u6dtT46nl1Oxi5PCNSfy28uQ8vOvzupNTm3FYXTp3GtQocKIrrUtOOS2jSu0mKQOSnH3Sb2vuN9hfbccd7noLfUWVGSppSJKdHMuI1adixPMcLX68fx5VqRSiWp5llbrbHjv5dM8jBD4SRf6jYbEcefH66sQhxMznU7NtZ/r38/lkySTca2aFFRiZV3cuTwRS5qZNrQoszQw34m3L4k7DhvXmUtNfv4HhltFD4CSWFmUBRxFj15ggg9BvXlRclllepVw8IgY1tWoXBvtYXJPDTw323v6Cko6P78CKMtV9+Jd4dSqgG31/ea04RaWGY1WSlLKPMswHEgV7bS3PEYSlsj3lGEeeZY4QutjcXYJuBfiee3LeoZ1YU4uTWhahRnUkop68tTuGQpiFiC4ko0g21KSdQsONwN+W3G16+frum5Zp7H0FBVFDFTGe4sahJhQCgFAVvaPD95hZl/YJHqu4+sVYtZ8FaL7ypfU+0t5x7n8NTPlOI7yCJ+bIpPqQL/XXitDgqSj0bJLap2lGM+qRLqInIGfS6cNM3SNv/E1NbR4q0V3orXkuG3m+5/wfcji04eFeka39dIv9dLiXFVk+9nbSPDQhF9F/BOqEsCgFAKAUBXZtgWksVbgPdP441iel/RtW7xKEtls/vcsW9SMH6yNdbDyfq3/AMDfyr5en6Prv9kv/V/Q1e1h/kvNGs51nQQFRxrXtbLGrNG3tnPV7Gk4qYuSTzrYisGsqaUcFdIbE7E+fT8CrkItmJcSUZSSz4/LyI+JYXt8Lev+laFOmo6PmYt1Vyzwqtyt+D/KtCEZrYzZNcyThsAzEXIAvf69vqrjhLOr++R5ckkWkKoo46vFZbg21abix424Hja9eVh9+pXqTa0MLzMxIO/Eabk7efnxqaCb0+BTm0tfiZsBDwc8xwtw6fDj9NWaMP3FO4qLWCJjGrJTEMzKdSmx+BHoQdiPI1yUFJYaPcJyg8xeDZ+zeAwmLkUHXhcSDqVoWsjld7hWBCMLXsthz8qzrlVaKyvWj38vqjStZ0q74ZerLu2f0Z1oViG4faAUAoBQHx1uCDz2rqeDjWVgpexrH5JGDxUsp/hdqt36/PbXPD+BQ9Ft/hYp7rK8my7qmaBT9rmtg5v3ftIq1ZL8+PiUfSTxaz8C0w62VR0A+yq8nlsuQWIpGSvJ6FAKAUAoBQEHPLfJ5S0hjUISzjcqALn6rivFRZi0T22e2jiOXnY/PuJm1MTckX2vsbcrgE2Plc1nxjg++iuFHlEvUkY5Z4lPQ8YkBRWva2+FlmDf3MUuFFa0JO/xrQVCT1Z85UqZZhiRRYXIO442/G9QerHTxPGpbYOG99Nze2wF7EWCny3It6HzrscENR4J2JwzgWIIWwIta4Ft/iKsqMsbaGdOcc76mTDbL+N99qvUl6pmV3mR9vUhEzzzG9utceeR6jjZm7dkey0pdJr4eWBtnBu9157MvhYfCxrOuruGHDVSX312NO0s58SmnFxe/wD1jc6BhMkw0Ta44I0bqqgEenSsmdepNYlJtGtC3pQeYxSfgWFREwoBQCgFAKApOyf5uUdJ5B/mq5e+1F/8V/Bn+jvYmv8AnL+S7qmaBT9rxfBzfu//AGFW7H/yIlH0ms2s/AtYDdVPkPsqrLdlyDzFHuuHoUAoBQCgFAQc6ytMTEYZCwRiL6TpJsb2v0vavMo8Swya3ryoTVSOMrqarnXZnB4LCyzRwKzgaVaS8lmchQbOdOxN9hXjs4paI0qN/cXNaMZzwueNNFry1OWyzKg0jj1q7bWvUuXV43lLYgyPfetinBHz9xWcmfI0vUpUwZcPgdUqi22/2iqUoJ1D25YibdhcKsa7AD8bVLCCzoZtxVIGNmq5FYMqpLLKmKS2oH5p+o8PqrlN4ynyPVWPFwyXNfE+95vbnUmdcEfDpkmZZl8mIkWGMAu17XNhYC5N/IV4rVY04cUtj3RpSqT4Y7nRvZ/2exmFkfvmQRsvuhtV2BGk9AbX+r4Yt3cQqxSW659xt2ltOjJvk+XebxVAvigFAKAUAoBQFJ2U9yY9Z5D/AJquXvtRX/FGf6O9ib/5y/ku6pmgV/aGPVhZh/02+oE1PayxWi+9FW9jxW813MyZNLrghbrGp+OkXrzXjw1ZLvZ7tZ8dCEuqX8EyoicUAoBQCgFAKAr8/wAsTEwPDIzKrWJK2BGkhha4PMDlXqLw8klKo6cuJH52KantGGbU1kHFjc+HYcTbpW0ocOrJa1V5wZGw5UlWFmUkEdCDYj6ani9Ck1lmXDRlnVALknlx8h8TUU6muD0o8y1wmFZMSyOLFSVI5AqxB+sVDCXFLJBXeIl8uEeaVIY/eY8egAJJP0W+IqWc1TjxMy1B1Z8KNdnPG9X0jMb1IEjWkFxcG1x1seG2+42qKekn4FuiswXcze8Z2WXDY+FSurCzEoNR4awRoJ46gbFTx4cwaoxuO1oN/uj8uf1LkqHY3CX7JfePobd2a7IJg5pJFcuGUKuoDUovc7jY325DgKo3F3KtFJrYvW9pGhJuL3+BstVC2KAUAoBQCgFAfCbUDeCl7Gg/JUY8XZ3+l2q5f/rNLlhfAzvReXbKT5tvzbLuqZoniVAylTwII+mup4eTko8SaZUdj5CcKin3oy0Z8irH7rVavku2bWzw/NFD0ZJu2UXvHK8mXVVDQFAKAUAoBQCgPMiXBHUW+mgKDs/2LweEIeKMtIBYSSHUw2tt81Ta+6gcanqXNSpo3odby8nP8o7CYieZhIGiiV2BdhZmAY+6p336nbe+/Cr9S7jGKxqzuiOmwdncKjRMsK6oV0oeYF7/ABN7m53uSeZrNdWbzrueTQ+0HZ+dMZNMsbNGzAgqCSTJqOwA3swIPqvWrltVjom+RTuYycdEbZ2QyEwgyyD8q4tb9Bb3t6kgE+gqO7uFUfDHZC0t+zXFLdlVl3ZO2YzPKgaGxdARdWMpO1jsdPj2/dNWKl5/t4qL12fu+uhWpWWLmUpLMd17/pr8CDP7PWGYRyJb5NqEh33TSQdFjuQSNiOAv0F345Oi+L2sY/s9/gnGquH2c58O46K6A8QDz333HCsvODSPVAKAUAoBQCgFAKAgZ7iO7w8z9Ea3qRYfWRU1tDjqxj3la8qdnQnLuZ9yPD93h4k5hFv623+u9LifHVlLvZ20p9nQhHokTqhLAoCiyb8nisTDyYidfPXs/wDmFXa/r0ac+mj923wM21/LuatLr6y9+/xL2qRpCgK7PZcUsV8JHFJID7srtGCtjexCnxXtxsOO9AcjxHtqxcbsj4GJXRirKZHBVlNiD4eRFDuDqnZDtAmPwkeJQadVwyXvodTZlvYX34GwuCDzocNSxHtVjXNFwQjHc953LT6+Eh22UC2kSWQknqeAoDes1acRk4dY2l2sJWZEO+9yqkjbyoDluK9q+OhxXyWbL4xIJFjKrKxJ1kadJ02Nwwt60O4LXt529x2WyhWwsDxSFu6cSvchSNmGjwtYjqN+NASfZr7QZMylmjkgSMxoHBVy17mxBuBblQEPt17QcblswR8JA0cmoxOJX8SqRe40eFhqW44b7E0BTZX7XcfiZO6w+XJK9r6Ukcmw4k+GwG43PUUGD3mntax+FcJicsWNiLgNI66hz0nQQfhe1Bg2vJu3TY/CvJgIkOIiI7yCZylgQbaWUENe2xNhsb2ocNF//uOI/wDRxf8AyP8A/mh3BdQe0TN3hE6ZRqiI1Bwzm69QunUR5gUBgyD22o8irisOIkY272OQuFvzZSoOnzBPpQYOuqbi43BocOe9rvazhcI7RQocTKtw2lgsakcQXsbkdFBtaxtQ6UUPtNzaRO+jyotDxDBJ2BHUEL4h5gEUBO7N+2fDysExURw5O3eBu8i/iNgyfQQOZFBg6gjggEEEEXBG4IPChw9UAoCi7V+NYsP+ulUH9xfE/wBgq7Z+q5VP8V8XojN9I+uoUf8AOS8lqy9qkaQoBQFDn35KfD4nkD3Mn7r+6T5Bt6u235lOdL3rxX9GbeflVqdflnhfg9vJl9VI0hQCgOD+3Xs93WKTFoPBiBpfylQbf4kH+Q0Oo9ewzPtE8uCZiFnBeM9JFXxWvzKC/wD7fnQM55nuWPhsRNh5CS8blS3Nuat/EpDfGgP0l7O+0YxuAjmYjvFHdzeUiAXJ6ahZ/RhQ4c19nsX9Z53Pj2F4oiZFvfndMON/2FLeqih0sf6Q3u4L1l+yKgRWf0fv71if+yv/AJ0DJn9Ij38D6T/bh6BEb+j2P+Ixh/6cf1tJf7BQMm+3nOcNJFBBHIjzLLrYKQxRNDqQSOBLFdv2fKgRh9gOWyasTiSCIigiU8nYMS1uunYX6tbkaBnIsR874/fQ6fq7B5hDh8HC80iRIIk3dgo2QdaHk/MWaf8AE4yb5NGW76dzEgG5DyMUFuWxvbl8KHTu3b/MZMvyVUV/yxSPDB+d9NnYeehXIPW1DhyH2X5KmKzGGKQAxpeVlPBhGPCPTWUuOYuKHT9Oihw/P/tzyZIMbHMgCjEIWYDhrjIDN8QyfEE86HUbj7Bs7aXCy4Zzf5Oy6PKOQNpHwZXt0FhyoGdPocFAUOG/LY53+Zh07sdNb7sR6Darsvy7ZR5yefctjNh+deSlygsLxe/w0L6qRpCgFARc0wQmieJuDC3oeR+Bsako1HTmprkQ3FFVqUqb5oidm8aZIQH/ADkZMcg56l2v8RY/GpbqmoVPV2eq8GQWFZ1KWJ+1HR+K+u5a1WLooCh7c5AMdgpsPtrI1Rk8pF3T69j5E0B+X8Di5MPMkqXWSJwwB2syHgfiCCPWh6One2XKxNDhc1iUhZURZARYjWNURPnuUP8ABQ4jSuzHauTBw4yFb2xMWgWPuPw1f4GYbcwvSgO3+yHIfkuXRlhaSf8ALP1GoDQPKyBdupNDjNV/pDe7gvWX7IqHUVn9H7+9Yn/sr/50DJn9Ij38D6T/AG4egRSex3Jlxny7DvJJGjxxajEwViA8hIuQdjwI5jagZ0fLfZJlkRBMTy25SuSv+FbKfiDQ4btFAqIERVVVFlVQFUAcAANgKA/H2I+d8fvoejt/af2YfLYVxUeIkOI7lNEchUxWWNbIuwMYNuNzuSTQ4cp7K9opsvxCzRjcHTIjKt2UHxr4hdD6EbgX4WoDtPtdhGMycTwnWiMmJBHNLEMfgkhY+hocOX+yDMVhzSEubCRWhueAZwCv0soX1YUOs/SlDhwj2/Zgr4uCFTcwxsW8jKy2HrZAf4hQ6i9/o+5ayw4nEEELKyRr5iIPqI/ikI9VNAzrVDhDzjHiCF5T80bDqx2UfE2qWhSdWooIr3VdUKUqj5fzyMHZ7AmGBQ35xiXkPMu25+4fCvd1VVSo2tlovBHixoOjRSl7T1fi9yzquWxQCgFAa/jz8mxIn/5U1o5eiuPcby6Gr1P8+i6f7o6rw5oy63+2uFW/bPSXc+T+RsFUTUFAKA5L2h9kzYjMzOrRrhJGEkq3OvVf8oqgLazkXuTtrboKHcnSM/yaPFYWXCuLJIhQWHum3hI81IBHoKHDi+TexnGGZPlLQLCGBk0O7Myg+JQNAtcbXvte+9DuTvKi2w4UOGh+1rsdPmEUPycp3kTMdLnSGVwL2NjYgqOPnQGodiexuc5diO+jhgcMuh0aYDUtwRYhTpII42PPah02j2r9jMRmMeGeDQJYtQaNmsLShNVmtuQUHS4JocNa7D9kM4y2dpUggkV10OhnC6gDcEEKdJBvyPE0OnZ0JsLixtuONqHD6RQH59zH2P5iJXEYhePUdLd5pJUna4I2NuNDuTrnYUZgkKw46KJe7RVWVJNRcLsNS28JsBuDv0FDhoXtD9lmImxbYjBCMrL4nRm0FZPnEbWIbj6360O5Ln2dZRm2CUYXEQwyYUk/84Fog19VhpOtSTfTtxO/KhwqO1XsYJcyYCVUBN+5kLAKf2HUEgdARt1odyfYcN2pRO6DKw4CQth2YD1bc+rAmgIuTex3EzSmXMMQBqbU4jYySued3YAL8NXwoMnY8vwMcEaQxIEjQaVUcAB9vrzocJFAa/OflWKCDeHDnU3Rpfmj+Hifoq9H8ihxfunt3L+zLn/urlQ/ZT1ffLkvcbBVE1BQCgFAKAwY3CrKjRuLqwsfx1517pzlCSlHdEdWlGrBwlsyryDFspbCzH8pGPC36yP5reo4H/erNzTjJKtDZ79z6FKyqyi3b1fajs+seT+pd1TNEre0ObrhcO8zAsVsFQe87sQI0HmzED40BA7F5tPPFIuKEa4iGVoZRHcJcWZSNRJsUZTxoDzk/bbB4ghRKEZpHiRZCFMhRyvg3s1yNgDfyoDNm3azDYbELh5n0ExGYu1giqrBfEb3BJJttbwmgMHa3tIYMAcVhTHKzFFh31Ru0siou6EXG5Ox5UBanOIBE8zTR93GSrvqARWU6WBJOxDbWNAYWzhVlmVnhWKGJZHYyeNNWo3dStkTStw2rex2oD1hO0GFlk7mPERPIRcIrqWIABOwPIEGgMOP7V4GGQxS4uBJBYFGkUMCeAIvcE9KAmYmSSSHVhZIgzAMjurSRlTY3srKWuvCzDiKA1PJM0zTES4qNZsCBh5e51fJpzrbQrNt8p8Ni1udAS8F21iE+MXEzQRRwzCKO5KsdMcZlZrsRYO+m9gBwN6A2HMM2ggCmWVE1myXO7m1/COLbb7UB5TOsOYkmE8ZichUcMCrMx0qARxJba3WgM5xsfe9zrXvdHeaLjVoBClrdLkC/nQFWvbHLy/djGYcuTpCiVSSb2sLHffagK3C9tIhicYmImgiihkWOO5IckRo0xa7EFQzqLgADne9AWOcdrsJhpIopZVDSHYAjYaSdTb7Ltx9KAvaAqs/zFo1WOLeeU6Yx06sfIDerNtRU25T9lb/AE95SvLh04qFPWctF9fBEjKMvWCJYxueLNzZj7xPx+6vFes6s3J/9IltbdUKagve+r5sm1CWBQCgFAKAUBV55lhlVXjOmaM6o28+an9k8Ks29dU24y1i918/FFO8tnVSlB4nHVP5eDPeS5oJ1NxokQ6ZEPFW/keRrzcUHSemqez6nq0ulXi8rEluuj+nQp85yKTGYxDNqTC4ddceiTS0mIbbXdTdRGlwOFy56VAWiEcsOBfMZm1PhXw6zFpJC7GSJHDg6jqIKLH5bWoCpyrIZ8TlWEwPcGFLRySzSNHfZxKxiWNmOpmvu2mwJPHagJuAncZtmEsWFeYqkOHDK0arq0tI+tpHB+eg8IbZbW2AoD5h+x06Q4OE6CBjTjMRoNo03kdUQGxZRIUA25XsOFAYMrykz5liolYHAw4kYlwL2bFmNLxnkyowMp/aZb8DQGfOOzWKlizXSg7zGTRxp41/u6LEjNx28Pem3GgLnH5KfluBdURMLhI5mvdVCs6KiC3IBO8N+FAaVl4V1eOZ3hwM+N71G7guJWeYSRkYlWsFdwLExg2IUOeJA65QGt9g8plw+Hk79Qss2ImncBg1jJISu42PhC0BRf2YxP8AVOKhEajF4uSRpPEvCac8WvY2hP3UBY47Lp4MwXFR4dsREMKMOqo8avEwcsTaVlXSw0gkG/h4GgKp+zGKjw+HYxiV/wCsDj54YmXbWZGCoZCqtpYodyLkXoCVicPKsuPxuMjWGNsMmHiHfLqIPeFgWAsjs7ou19+GqwJAr+x0RMuAjxbvHJBE3yaBsKYL2j0PeTUyylUPACPjcr0Alt2axIyvHRrEvyvGSTMw1LwlkIW7XsbRW+ygJ+aZdPHj8HLHh2mgggeJdDxqySSGMaiJGXw6E5XPlQGy5rmKQRl39Ao4sx4AdSalo0ZVZcMf+iC4uIUIccvcubfRELI8vfU2In/PScuUaclH3/i81xVjhUqfsr4vqV7S3nxOvW9uX/5XT6lzVQvigFAKAUAoBQCgKfOMrYsJ4CFnUW392Rf0W+4/7i1QrpLs6msX8O9FC6tZSkq1HSa8mujM+T5ss4IsUkXZ4295T946GvFeg6T6p7PqS2t1GutsSW6e6/rvJWNwiTRtFIodHGllPAg8QagLRlRQAABYDYDoBQGDB4COIyGNApkcyOR85yACT8AB8KAk0BEyzLYsOndwoEW5a1ySWYksSSSWJJJuTQEugPhF6AqcN2XwcbKyYWFSralsgAVuqjgp3O4FAW9AKAUAoBQGHGYSOVGjlRXRhZldQykeYOxoCJgMhw0La4oI1e2kMFGoL0BO4Gw2G21AWNAQ80zKOBNbnyCjdmPIAczUtGjKrLhj/wBEFxcQoQ4p+5c2+iK7LMvkkkGJxIs4/NxcREDzPVz1/AsVq0YR7KltzfX+ipb286k/xFff9sf8f7+/C9qkaQoBQCgFAKAUAoBQCgKrNsnEhEsbGOdfdcc/Jh85as0bjgXBJZi+X07ylc2aqNVIPhmtn8n1Rjy/OjqEOJXupuX6Enmh+7jXqrber2lJ5j8V4nihevi7KuuGfwfg/kXNVDQFAKAUAoBQCgFAKAUAoBQCgFAVWaZ0sbd1GplnPCNeXmx4KPWrNG2c1xyeI9X8upSuL2NN9nBcU3yXz6Ix5bk7a+/xDCSbkPmRjog+/wDB9VbhcPZ0liPxfiebe0lx9tXfFP4R8PqXNVC+KAUAoBQCgFAKAUAoBQCgI2PwMcyFJFDL58vMHiD5ipKdWdOXFB4ZFWoU60eGosoqBFisL7l8TCPmn88o8j8/041a4qNf2vVl15P6FDhubX2fXh0/cvDqWGW5zDNsjWccUbwuOtwfuqCrbVKWslp1WxaoXlGtpF69Ho/IsKgLQoBQCgFAKAUAoBQCgIeY5pDALyuF6Dix9ANzUtKhUqvEEV691SoLNSWP58irM2KxWyA4aE/PYflmHkPmepqzw0KHtetLotl9Snx3N17C4I9X7T8FyLPLMrigW0a7n3mO7MepPOq9avOq8yfu5IuW9rToLEF4vm/Fk2oSwKAUAoBQCgFAKAUAoBQCgFAKAUBAzLJ4Z/ziAsODDZx0sRvU1K4qUvZfu5FavaUa/trXrz8yB8hxcP5mYTL+hOPF8HXifWp+1t6ntx4X1j9Ct2F3R/TnxLpLfzXzPv8AaFk/vGHli6sB3if4l/lT8IpfpTT+D8mP9QdP9enKPfuvNEvC59hpPdnj9C2k/Q1jUU7WtDeLJ6d9b1PZmvPH8lirA7gg+lQNYLSaex9rh0UB8JtQZwQcTnOHj9+aMeWoE/QN6mhbVZ+zFlapeUKftTXmQf7SK/8Ad4ZZvMLpT/E3D6Kn/BuP6klH4vyRW/1FT/RhKXuwvNnzuMbN78iYdOkfjkt5sdh6inFbU/ZTk+/ReQ4Lyt7UlBdFq/PbyJeXZFDCdQUtJzkc6nPxPD4WqKrdVKiw3hdFoiehY0aL4ksy6vV+ZZ1XLYoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoCJisshk9+KNj1Kgn6eNSwrVIezJr3kFS2o1Pbin7ivbsphb3EZU9Vd1+w1Or+vs3nxSKz9F2ucqOH3Nr5j+zMfKbED0man42XOMfIf6bT5Tn/wCzH9mk5zYk+szU/Gy5Rj5D/Toc5z/9mB2Uwt7sjOeru5++n4+tsnjwSOf6XbN5km/Ft/Mm4bJ8PH7kMYPXSL/Sd6hncVZ+1J+ZZp2lCn7MEvcTqhLAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAf/Z"
              alt=""
            />
          </div>
          <div className="w-[400px] border-1 h-auto shadow-2xl shadow-gray-600 border-purple-00 p-8 rounded-2xl drop-shadow-xl bg-[#3c2f50] text-[#b1b2b3] transition duration-150 ease-in animate-twice hover:animate-pulse ">
            <div className="flex gap-8">
              <div>
                <img
                  className="w-[80px] rounded-xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8scvDsSRLi6sz8jqyQ06918MMCAW1BcyOiA&s"
                  alt=""
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Project Enginer</p>
                <p>Wipro</p>
                <p>Mar 2021 - present</p>
              </div>
            </div>
            <p className="pt-4">
              Enhanced user experiences on Neurobit PSG & Hybrid, Portals by
              resolving bugs & reduced load time by 40%. Built Neurobit
              Analytics portal using React Js with seamless interaction of REST
              APIs using AXIOS optimized with React Query. Refactored previous
              code to TypeScript, updated with new dependency and integrated
              Vite with Jest for Unit Testing. <br></br>
              <b>Skills:</b> • ReactJS • Redux • NodeJs • Material UI • HTML •
              CSS • JavaScript
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Experience;
