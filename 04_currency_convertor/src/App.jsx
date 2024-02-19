

import { useState } from "react";
import "./App.css";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);
  const option = Object.keys(currencyInfo);
  // console.log(option);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    {
   
      const converted_value = Number(amount * currencyInfo[to]);
      console.log("converted amount is ", converted_value);
      setConvertedAmount(converted_value);
    }
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgRERUYEhISGBIRERERGBIRERIRGBUaGRgUGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjYrISs0NjQ2NDQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NP/AABEIAJ4BPwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADYQAAEDAAcGBQQBBAMBAAAAAAEAAhEDBBIhMVGxIjJBYXGBBRNykfChssHRMyNiguEGQlLx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEEAgMF/8QAKhEAAgIBBAEDAwUBAQAAAAAAAAECEQMSITEyQTNRgQRhcSIjQkOxkRP/2gAMAwEAAhEDEQA/APkKIQCIXU5DKIujhgiyL57LRkVFBWGIEY8UAKFEWxN+CL4m7BAACKdlmDOPBKFoyRQKx9mBZmePz5ggxsmEUIVEK40QzP0QsBa0sVoRAKywELCKFaFRRsqQnQWRRRRAghRQIpgRRQKIERFRQIEREIopgBFAIoERRRRMCKKQogCIIpvLOUdYbqigsRAhaKFgm88P+oJ/SalIAukf3GNBgnp2sWrehKGiBFp0xMQLpOSNPRAEiTwyM3SbrojBaKIwLZviWtmL3cTHKZPMjmsNJvFDSSBNts5YTuIugQkCYXXqRFgzTBvQPJFxk4eyLXRwxWhBDhERfn87oIAcU7nyAIwQIL3A4CEaNwBvEpWmCCRzvRJtHDsFoQE9oWYi/NRlJAIjFCzdMXIEBPRugqPfIAgCPr8vSJ8CNBpApbCpRCepmdKLLYUlIonYUNKkpUUWFBUURQIiKgUTAiiiiBBRCCZAgBEIqBMRFFFEwH8tPR0d+N8SZmAInHuFY1t0nDgP/RVQpCT+gBdGHRapIzbZZSNbGJPQXe5/SokcB7klW0mHdVBD5BcDBxzjpA0QATNC3sqoiY4LUYuRiU1HkxULL+xVlLR4cMTOQzWyrVe+SOBjmm8UorADP+0y85Hg3tx59F00VGzH/onJIwAyLrgJAGQlZaTeK2UYu7lZKXeK4zWyOsXuzlBOXE3JAnLYgqNFwb2nmiATJ7lBokqSRctCCHGI4IlhAlRrbpyUtHBAhiS4jPgi0lpyKBaWke6LGlx580/9F/gWsJBPuj5hizwSgkSJ680fL2bSa+wn9wuoyIkYo0bZN6VziYnhhyRY6DKe1id0XGjGWqFgZaoebyU83ktWjFSDYCEIW+SltGw9wwoQhaUlMREUEUgCFAgEUwIooogQUQgiExDKBRRAhmtlMGRecB9TkmoG3ScJ7k5BLSmToOAEYLdbWK9y1zifbsBkqqPH5krLN3bkq6MX/Mk3yjK4Y9KLu6ari7uhSkR3TVd13dNdjL6jlpJwy0Xo6hU7QvBwJuAIuBuleae7a9tF6jwqic6BNm1agODrw1suIgRAB4qnC1qZJ9Vaimjq1HwggeZF7WmzkHcD217rzfjlXLYu4le9qdYaGhjcAON5I5rx3/LavYIIvY4mORi9p/H+l1nai00eb9HmnPPUvg8+wbPcrFTDaK2MOz3KxU28VDPhHuw7M5ITBKE7oujuoUegFwg3FFjZm9K2JvwUPJaEFWOYAAZx4JWgQc+Hz5ggECGaJIE90XCDAKjwLrN+alGBO1cE/sIZjJBJMQlUKeG2f7skxBpWAAEGZ+fkJAgnohf7p8sXCAoFoIGQ9ghAyWqM6ipRWQFIRQWVopoUKKCwKKKIEEIhBFqYDFqVO7BK0JmSJkHBQJAFoVoo7pm7j+hzSUTZN9wGJ/HVWUrp5AYDJbS2E+SNdPTgMkH3H5kjR3DRJSYpvgS5Lj+FUzH5ktNE0QSYgC61MWjgLr8/ZVspIdsADnF+GIJvH0Ta4MryNSUZsgxAkXnZB6E4pqANAvJdfg24YZkfhV00kWjJgiXGTeZiT2KWhw7/AKTvcP4lz6WHGyA3DCS7DM3z0heu8MaaOjcXOJc8Eukk8Lm/PwvIUVK1ry5wJIizEQLseq79B4m1+yAQSHXmzFzSc+SowONu3uR/VxlKKSW3k6lRrZtY8DnmFT404PYGuvBJ0xWGov2ux1CXxisBrWkyZcRdGSplJOLbIoYazLTycd1EWbJzMHMTisNKdorqvrjH0dkh1oFxa666eGOC5FJvFeflpJU9j2MV72tzlotQRCgLx3EcEWEcUgUWrEEKxxECBfxVaKBDNib8EXETdglCiBFrC2DIv4JQgEQtCLHlsCBB4/PdK10XpVAixFppCpbKrRWrYqQ9pS0goAi2Kg2kRepEY+w/aJPYZBMBmwON/LhzUc4cZPPAlIoixFrWA4GeRuKWIN9yDUzXkdMjeExBOCDE7iIwjpePY/tRjMr+mPsn5M+BXYqMbPQYlO5l+IF0kcQExdcALgPklOtx3sIHX3YcB84p3YKtmN6d5uTXBl8hozcgWyY+vACMSpRD6m5NTXbIv/8ARzOQ5D5wT8B5LqR8iBugGM+ZPM/rJU1ajLnhrRJP6xTcF0vDKCyQTvEGeQjBbhHVJHOU1GLZqpKBraMNiRO0f/RgyVyHUJaY4EktOYu+q7da3R1GhVbKAPYWnMlpyMC9U5MabpeCXHlaVvyefpcT20XQ8PP9QdH/AGOWCtMLXlrhBEA+y3eH746P+xymx7S+SrJ0+Do1F232OoVX/ID/AE2+o6FPUd//ABOoVP8AyD+NvqOhVc/RZHjX70Tl0OHcql+98yV1Dh3KopN4/OCgl1R6C7MqlQFZfOdn7AIea7PRcdaO+hmuVJWXzXZ6Kea7PRGtBoZqlSVm8w56KeYc9EakGhmkFCVQKQ56KeYc9E9SFpZfKkqkPOaNs5o1BpLZUlV2ioCUag0lkqICeROSlojD3/2nYqHs53cuP+kbd112vuqZRBQmFDFEpJTkIsQAmhBpUcgB2hKMUWqyq0Rc6OHE/hNK3SE3Vtl1DVi5pdhwbzP6VAESDiMQu05oDYF0QAMQstPVS4FzRJETF8j9rvLFS2OEctvfg573n6ATxhO3gq3hOFyXJ1fAjDenfgkZiri3ZtHCYAP/AGP6CFwHkaiNls/9jh/a0jHqVQ83p2EmScZvSPx+ZJvgXk6FSe1slxvA2REiYxWqpVlppABjBN4/tXLOHZXeED+qPS7RdYTakkcckE4tv2O1WjsjqNCqqKsta3a4udECcA39qytDZHUaFc6tjYb6n6MVWSTi20S44qSSZX4nTMc4lpNoRF0SIwTeH746Un2OXPpcT20XQqG+Oj/scpIvVO37lkopQpexvqR2/wDE6qn/AJAf6bfUftVtR3+x1Cq8fH9NvqOiqn6LJcfrROXQbvcqik3ir6Dd7lUUm8fnBQvqi5dmc7yzkVBROyK1IgLhoRRrZmFGckfKOS0SpKelC1MzGicMQQp5ZyWsO/8AmI9lIB5fUfsI0oNTMtg5I2DktVjhN+PJLd1+gRpDUZww5J/LPG7VWl56dLkqdINRXHL3RM/ME6iKFqFslABWQoAihWVwmATkoBOgsVMUESgRGokKUTSTAxOC6bKARZAtTM8zny/C1GLkjMpKJzmroVOmo2ltqbIMm692cCVmpaKwYuceBxb/ALP06rOTJkppuLE0pL7Ho6wWRBmbrTmABhMnBhA4RxHRZ/Na070zeLrJEZzd9SjS4HqsFcxHf8Kqba3RLCKlsxK80WrTQQ0iTdsg8iLlU3gkcYMi7mLiulV6sXMl0SQLNoD3JxvUyTk3RTJqKVnPoWyb7gLych+09O+eQwAyGSj3yYMiCSQTMHIZAJH4JeBvkNHglpMfmSajwS0mPzJD4BclxwV3hH8o6O0VJwVvhH8o6O0W4do/k5z6P8HZre6Oo0K51b3G+p+jF0a3ujqNCudWtxvqfoxVZfJLh8HOpcT20XQqG+Oj/scufS4ntot9Q3x6X/Y5TY+3yVz6/BuqO/2OoVfj/wDG31HQqyo7/wDidQqvH/429ToVVP0ZEcPWRzKDd7lUP3j84K+g3e5VFJvH5wUUuqL49mc20cz7o2jmfco+SeXuj5J5KWmV2hQ45qWjmm8o8kfKPJFMVoW0c0bRTeWeSnlnktUwtEtnM+5UnmiKMpm0ROQjiZRTFaEkoglMaMi4+yFgopitElSUbBUsp7itEJUBRsqNamIhKIQIRAQIKspKItAJ4iR+ldU6vJtOLQARFowCemJ7ArpUhYGFpkzBtbIwJ2YPC/PhguscdqznKdNI51UpGtkuBv43TGQC6NLTSIaLLTwxLvUePTDkuM6ZM38xeF03HDot426aOeVK0ymmp2kFpBkTBuuI4rCMVbS7x6nVVBc5Nt7nWKSWx3aXA9VgreI7/hbqU3HqsFbxHf8ACoy8EuLkroWgulxAAi4kCeS7NGbgeQXn3LvVfdb0b9oSwPdo19Qtkzn1lrSbQItDESJP+1lfgjSnbd6nalK/BcpO7OyVUGjwS0mKNGblpoaC0bThs8BmYQk2qQNqLtlfDsrvCf5R0dopWaEtMYiJacwh4T/KOjtFuKqaT9zEmnBtex2a3ujqNCufWtxvqfo1b60dkdRoVz6zuN9T9GKjN5JcPg51Lie2i6FQO2Oj/scudS4ntouhUTtjo/7HKbH2+SvJ1+DbUd7/ABP4Vfj38bfUdE9RO32OoSePH+m31HQqqfosjh60TmUG73KopN75kr6vu9yqKXeKil1RdHszPIzCNoZhY5RU+sp0GqRmjPNZEUag0Gqeak81mCICeoWk0t6iOJyCbzI3TA+p5lZS5BPULSamvOd2Rgj2KNscR7GPosoTsEm8wM0amDiXwOBHfZP6+qVwjFW0jRZyjA/hZg48Fp7GVuWEqNUY2QTEgYxcpaHCOsfhKwo0Ver2jeQ1ovJPHkBiUKVgaYF+TnReOmA+qWrvMxN0E97uKlYpDMTcIgXZLe2mzO90CidL2zftNx6rbXDsHtqudQnbb6m6rfWzse2q1B/pZma/VEwBdV3DouSCuq44dEYvIsvgw0u8ep1VQVtKdo9Tqqhisvk2uDuUpuPVYK3w7/hbqU3HqsFaOHdU5OCXFyZnYruVc7LfS37QuE7Fd2rnZb6W/aFnB2ZvP1Rx6X+Q+pyLaIuuHc8AhSfyH1HUrpsY1rIaQ4yLRBm+CsRjqbNylpSObRiLiMDeMFuZTWpuDQ2AAL7oSU7GkWpAcDeJEuEDhmlqp3uo0WopxdGZNSjZo8QpxewtmACHTeCWysvhP8o6O0VniG+ejftCq8K/lHR2ibbeVfkyklidex2K2dkdRoVz61uN9T9GLfWzsjqNCsFZOw31P0au+XycMPg51Lie2i6FRO2Oj/scufS4ntot9RO2Oj/sKlx9vkqydfg21E7f+J1Cr8e3G+o6Kyonb/xOoVfjx2G+o6Kqb/ZZJD1onNoN3uVRSbx+cFdQnZ7lUUu8VE+qLY9mY/J5/RTyeatUhcdKKNTK/J5o+Tz+idWsYDE8TFyelC1MpbQcZuHGPogWc1a509OAySo0oNTE8vmrKKr2jE9TkEAtNUeZjheea1GKb3FKTSM9LVy0xPQ5hIWc1qrTzNngIPNZyiUUnSEpNpWaqxRQwX8RoVksc1vrW4Oo0KwpzSszBujbQMBbdcBI+gv+qyOAJkXclsqo2D1OgWIJy4QR5ZbVm7XY6hCsN2j20TVXe7HUIVjePbRH8Q/l8CUI22+puq3VwbB7arFQ77fU3Vba5uHtqtQ6szPtE54XUdw6LlBdV3DojF5DL4MNLvHqdVUFbS7x6nVVAXrD5NLg7dLgeqwVrEd/wt1LgeqwVnh3/CpycE+LkzOXcoN1vpb9oXDcL13Kvut6N0Czh5ZrP1RyH756u/K2VTcd6m6FYnjbPVy2VXcd6m6FZx9jWTr/AMKqfePbQKyq8eo0VVPvHtoFZVuPbRC7GX1Hr++7o37Qq/C/5R0donr++7o37Qq/Cx/UHR2if9i/If1P8HWre6Oo0KwVncb6naMW6t7o6jQrBWBsN9T9GLvlfJwwrgwUuJ7aLfUt8dH/AGOWClF57aLdUt4dHfY5TY+3yU5Ovwbajvf4nUKvx3cb6jonqO92OoSeOjYb6joqpP8AZZLD1kc2g3fdUv3j84K2h3fdVUg2io31RbHsz//Z')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">

          
              <InputBox
                label={from}
                amount={amount}
                currencyOptions={option}
                selectCurrency={from}
                // onCurrencyChange={(currency) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)} 
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label={to}
              amount={convertedAmount}
              currencyOptions={option}
              selectCurrency={to}
              onCurrencyChange={(currency) => setTo(currency)} // Change this line
              onAmountChange={(value) => setConvertedAmount(value)} // Change this line
           
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
