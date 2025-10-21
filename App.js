import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LoadingScreen from './src/screens/LoadingScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import PhoneNumberScreen from './src/screens/PhoneNumberScreen';
import OtpVerificationScreen from './src/screens/OtpVerificationScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';

export default function App() {
  const [step, setStep] = useState('loading');
  const [phone, setPhone] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  return (
    <>
      {step === 'loading' && (
        <LoadingScreen onComplete={() => setStep('onboarding')} />
      )}
      {step === 'onboarding' && (
        <OnboardingScreen onComplete={() => setStep('phone')} />
      )}
      {step === 'phone' && (
        <PhoneNumberScreen
          onSubmit={(p) => {
            setPhone(p);
            setStep('otp');
          }}
        />
      )}
      {step === 'otp' && (
        <OtpVerificationScreen
          phone={phone}
          onVerify={() => setStep('profile')}
          onBack={() => setStep('phone')}
        />
      )}
      {step === 'profile' && (
        <UserProfileScreen
          onSubmit={(profile) => {
            setUserProfile(profile);
            setStep('home');
          }}
        />
      )}
      {step === 'home' && <HomeScreen userProfile={userProfile} />}
      <StatusBar style="auto" />
    </>
  );
}

