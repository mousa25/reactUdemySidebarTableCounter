import { useState } from "react";
import Modal from "../Components/Modal";
import Button from "../Components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        {" "}
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Als Spezialist im Ultraschallschweißen von Kunststoffen, Packstoffen,
        Vliesstoffen und Nichteisenmetallen entwickelt Herrmann seit über 60
        Jahren sichere und effiziente Schweißsysteme. Dabei entstehen über 2.000
        erfolgreich realisierte Schweißlösungen pro Jahr. Mit den
        Dienstleistungen des Herrmann Engineerings begeistern mehr als 600
        Mitarbeitende Kunden auf der ganzen Welt. Das Leitmotiv „BONDING – MORE
        THAN MATERIALS“ steht hierbei für eine wertschätzende und
        vertrauensvolle Zusammenarbeit auf Augenhöhe. Somit stellt Herrmann als
        zuverlässiger Partner einen nachhaltigen und wirtschaftlichen
        Schweißprozess langfristig sicher. Werden Sie Teil unseres Teams und
        bewerben Sie sich als Als Spezialist im Ultraschallschweißen von
        Kunststoffen, Packstoffen, Vliesstoffen und Nichteisenmetallen
        entwickelt Herrmann seit über 60 Jahren sichere und effiziente
        Schweißsysteme. Dabei entstehen über 2.000 erfolgreich realisierte
        Schweißlösungen pro Jahr. Mit den Dienstleistungen des Herrmann
        Engineerings begeistern mehr als 600 Mitarbeitende Kunden auf der ganzen
        Welt. Das Leitmotiv „BONDING – MORE THAN MATERIALS“ steht hierbei für
        eine wertschätzende und vertrauensvolle Zusammenarbeit auf Augenhöhe.
        Somit stellt Herrmann als zuverlässiger Partner einen nachhaltigen und
        wirtschaftlichen Schweißprozess langfristig sicher. Werden Sie Teil
        unseres Teams und bewerben Sie sich als Als Spezialist im
        Ultraschallschweißen von Kunststoffen, Packstoffen, Vliesstoffen und
        Nichteisenmetallen entwickelt Herrmann seit über 60 Jahren sichere und
        effiziente Schweißsysteme. Dabei entstehen über 2.000 erfolgreich
        realisierte Schweißlösungen pro Jahr. Mit den Dienstleistungen des
        Herrmann Engineerings begeistern mehr als 600 Mitarbeitende Kunden auf
        der ganzen Welt. Das Leitmotiv „BONDING – MORE THAN MATERIALS“ steht
        hierbei für eine wertschätzende und vertrauensvolle Zusammenarbeit auf
        Augenhöhe. Somit stellt Herrmann als zuverlässiger Partner einen
        nachhaltigen und wirtschaftlichen Schweißprozess langfristig sicher.
        Werden Sie Teil unseres Teams und bewerben Sie sich als
      </p>
      <p>
        Als Spezialist im Ultraschallschweißen von Kunststoffen, Packstoffen,
        Vliesstoffen und Nichteisenmetallen entwickelt Herrmann seit über 60
        Jahren sichere und effiziente Schweißsysteme. Dabei entstehen über 2.000
        erfolgreich realisierte Schweißlösungen pro Jahr. Mit den
        Dienstleistungen des Herrmann Engineerings begeistern mehr als 600
        Mitarbeitende Kunden auf der ganzen Welt. Das Leitmotiv „BONDING – MORE
        THAN MATERIALS“ steht hierbei für eine wertschätzende und
        vertrauensvolle Zusammenarbeit auf Augenhöhe. Somit stellt Herrmann als
        zuverlässiger Partner einen nachhaltigen und wirtschaftlichen
        Schweißprozess langfristig sicher. Werden Sie Teil unseres Teams und
        bewerben Sie sich als Als Spezialist im Ultraschallschweißen von
        Kunststoffen, Packstoffen, Vliesstoffen und Nichteisenmetallen
        entwickelt Herrmann seit über 60 Jahren sichere und effiziente
        Schweißsysteme. Dabei entstehen über 2.000 erfolgreich realisierte
        Schweißlösungen pro Jahr. Mit den Dienstleistungen des Herrmann
        Engineerings begeistern mehr als 600 Mitarbeitende Kunden auf der ganzen
        Welt. Das Leitmotiv „BONDING – MORE THAN MATERIALS“ steht hierbei für
        eine wertschätzende und vertrauensvolle Zusammenarbeit auf Augenhöhe.
        Somit stellt Herrmann als zuverlässiger Partner einen nachhaltigen und
        wirtschaftlichen Schweißprozess langfristig sicher. Werden Sie Teil
        unseres Teams und bewerben Sie sich als Als Spezialist im
        Ultraschallschweißen von Kunststoffen, Packstoffen, Vliesstoffen und
        Nichteisenmetallen entwickelt Herrmann seit über 60 Jahren sichere und
        effiziente Schweißsysteme. Dabei entstehen über 2.000 erfolgreich
        realisierte Schweißlösungen pro Jahr. Mit den Dienstleistungen des
        Herrmann Engineerings begeistern mehr als 600 Mitarbeitende Kunden auf
        der ganzen Welt. Das Leitmotiv „BONDING – MORE THAN MATERIALS“ steht
        hierbei für eine wertschätzende und vertrauensvolle Zusammenarbeit auf
        Augenhöhe. Somit stellt Herrmann als zuverlässiger Partner einen
        nachhaltigen und wirtschaftlichen Schweißprozess langfristig sicher.
        Werden Sie Teil unseres Teams und bewerben Sie sich als
      </p>
      <p>
        Als Spezialist im Ultraschallschweißen von Kunststoffen, Packstoffen,
        Vliesstoffen und Nichteisenmetallen entwickelt Herrmann seit über 60
        Jahren sichere und effiziente Schweißsysteme. Dabei entstehen über 2.000
        erfolgreich realisierte Schweißlösungen pro Jahr. Mit den
        Dienstleistungen des Herrmann Engineerings begeistern mehr als 600
        Mitarbeitende Kunden auf der ganzen Welt. Das Leitmotiv „BONDING – MORE
        THAN MATERIALS“ steht hierbei für eine wertschätzende und
        vertrauensvolle Zusammenarbeit auf Augenhöhe. Somit stellt Herrmann als
        zuverlässiger Partner einen nachhaltigen und wirtschaftlichen
        Schweißprozess langfristig sicher. Werden Sie Teil unseres Teams und
        bewerben Sie sich als Als Spezialist im Ultraschallschweißen von
        Kunststoffen, Packstoffen, Vliesstoffen und Nichteisenmetallen
        entwickelt Herrmann seit über 60 Jahren sichere und effiziente
        Schweißsysteme. Dabei entstehen über 2.000 erfolgreich realisierte
        Schweißlösungen pro Jahr. Mit den Dienstleistungen des Herrmann
        Engineerings begeistern mehr als 600 Mitarbeitende Kunden auf der ganzen
        Welt. Das Leitmotiv „BONDING – MORE THAN MATERIALS“ steht hierbei für
        eine wertschätzende und vertrauensvolle Zusammenarbeit auf Augenhöhe.
        Somit stellt Herrmann als zuverlässiger Partner einen nachhaltigen und
        wirtschaftlichen Schweißprozess langfristig sicher. Werden Sie Teil
        unseres Teams und bewerben Sie sich als Als Spezialist im
        Ultraschallschweißen von Kunststoffen, Packstoffen, Vliesstoffen und
        Nichteisenmetallen entwickelt Herrmann seit über 60 Jahren sichere und
        effiziente Schweißsysteme. Dabei entstehen über 2.000 erfolgreich
        realisierte Schweißlösungen pro Jahr. Mit den Dienstleistungen des
        Herrmann Engineerings begeistern mehr als 600 Mitarbeitende Kunden auf
        der ganzen Welt. Das Leitmotiv „BONDING – MORE THAN MATERIALS“ steht
        hierbei für eine wertschätzende und vertrauensvolle Zusammenarbeit auf
        Augenhöhe. Somit stellt Herrmann als zuverlässiger Partner einen
        nachhaltigen und wirtschaftlichen Schweißprozess langfristig sicher.
        Werden Sie Teil unseres Teams und bewerben Sie sich als
      </p>
    </div>
  );
}

export default ModalPage;
