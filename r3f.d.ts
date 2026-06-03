import { ThreeElements } from '@react-three/fiber'
import * as THREE from 'three'

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        coreMaterial: any;
        ringMaterial: any;
        hudMaterial: any;
        atmosphereMaterial: any;
        unrealBloomPass: any;
        line: any;
      }
    }
  }
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      coreMaterial: any;
      ringMaterial: any;
      hudMaterial: any;
      atmosphereMaterial: any;
      unrealBloomPass: any;
    }
  }
}
