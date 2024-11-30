import { 
  SolarIcon, 
  InverterIcon, 
  BatteryIcon,
  CameraIcon,
  PTZCameraIcon,
  HDCameraIcon,
  FireAlarmIcon
} from '../components/icons';

export const services = [
  {
    title: "Solar Panels",
    description: "We sell and install durable and highly efficient solar panels that convert sunlight into clean, renewable energy for your home or business. Our solar solutions help reduce electricity costs while contributing to a sustainable future.",
    icon: SolarIcon,
    link: "/services#solar-panels",
    image: "/images/services/solar-panels-roof.jpg"
  },
  {
    title: "Inverters",
    description: "We offer reliable and efficient inverters that convert DC power from solar panels into usable AC power. Our inverters ensure optimal performance and seamless power conversion for your solar system.",
    icon: InverterIcon,
    link: "/services#inverters",
    image: "/images/services/inverter-system.jpg"
  },
  {
    title: "Batteries",
    description: "Strong batteries are the heart of every inverter installation. We provide high-capacity, long-lasting batteries that store excess solar energy for use during nighttime or cloudy days, ensuring continuous power supply.",
    icon: BatteryIcon,
    link: "/services#batteries",
    image: "/images/services/battery-storage.jpg"
  },
  {
    title: "Analog & Network Camera",
    description: "Vandal-proof cameras with night vision and full colour capabilities. Our security cameras provide crystal-clear footage day and night, with advanced features for comprehensive surveillance.",
    icon: CameraIcon,
    link: "/services#analog-network-camera",
    image: "/images/services/security-camera.jpg"
  },
  {
    title: "PTZ Camera",
    description: "Our PTZ (Pan-Tilt-Zoom) cameras offer dynamic surveillance with remote-controlled movement capabilities. These cameras provide extensive coverage and can track moving objects with precision.",
    icon: PTZCameraIcon,
    link: "/services#ptz-camera",
    image: "/images/services/ptz-camera.jpg"
  },
  {
    title: "High-Definition Camera",
    description: "Experience superior image quality with our HD cameras. These advanced systems capture every detail with exceptional clarity, making them perfect for facial recognition and detailed surveillance.",
    icon: HDCameraIcon,
    link: "/services#hd-camera",
    image: "/images/services/hd-camera.jpg"
  },
  {
    title: "Electric Fence System",
    description: "We install a low energy consumption electric fence with high DC pulses. The robust energizers and deep cycle batteries guarantee a steady and reliable supply of voltage across the lines. We can integrate modular solar panels for an offsite location to ensure a steady power supply.",
    icon: FireAlarmIcon,
    link: "/services#electric-fence",
    image: "/images/services/electric-fence.jpg"
  },
  {
    title: "Fire Detector & Alarm System",
    description: "We prioritize the security of lives and properties with our advanced smoke detectors and fire alarm systems. Our multi-sensors are capable of detecting a wide range of hydrocarbon gases for comprehensive fire protection.",
    icon: FireAlarmIcon,
    link: "/services#fire-detection",
    image: "/images/services/fire-alarm.jpg"
  }
];
