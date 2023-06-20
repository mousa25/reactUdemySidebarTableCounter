import Button from "../Components/Button";
import { GoBell, GoCloudDownload, GoHeart } from "react-icons/go";
function ButtonPage() {
  const handleClick = () => {};

  return (
    <>
      <div>AppSite</div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell className="mr-4" />
          click me
        </Button>
      </div>
      <div>
        <Button secondary onMouseLeave={handleClick} className="mb-5">
          <GoCloudDownload />
          Buy nOw
        </Button>
      </div>
      <div>
        <Button success rounded outline onMouseEnter={handleClick}>
          <GoCloudDownload className="mr-4" />
          Hide it
        </Button>
      </div>
      <div>
        <Button warning>delete</Button>
      </div>
      <div>
        <Button danger rounded outline>
          <GoHeart />
          smash
        </Button>
      </div>
      <div>
        <Button primary rounded>
          get it
        </Button>
      </div>
    </>
  );
}
export default ButtonPage;
