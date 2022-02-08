import StyleHeader from './StyleHeader';

function Header() {
  return (
    <StyleHeader>
      <div className="header">
        <figure>
          <img
            className="logo"
            src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
            alt="Wild Code School logo"
          />
          <figcaption> LES ARGONAUTS</figcaption>
        </figure>
      </div>
    </StyleHeader>
  );
}

export default Header;
