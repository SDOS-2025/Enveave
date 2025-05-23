import React from 'react';
import { motion } from 'framer-motion';
import { ClipLoader, BeatLoader, HashLoader, PulseLoader } from 'react-spinners';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Enveave brand colors
const brandColors = {
  primary: '#113627',
  secondary: '#F6F67D'
};

// Simple Spinner Loader Component
function SpinnerLoader({ size = 50, color = brandColors.primary, loading = true }) {
  if (!loading) return null;
  
  return (
    <div className="flex justify-center items-center p-4">
      <ClipLoader color={color} size={size} loading={loading} />
    </div>
  );
}

// Beat Loader Component
function PulsingLoader({ size = 15, color = brandColors.secondary, loading = true }) {
  if (!loading) return null;
  
  return (
    <div className="flex justify-center items-center p-4">
      <BeatLoader color={color} size={size} loading={loading} />
    </div>
  );
}

// Hash Loader Component
function HashSpinnerLoader({ size = 40, color = brandColors.primary, loading = true }) {
  if (!loading) return null;
  
  return (
    <div className="flex justify-center items-center p-4">
      <HashLoader color={color} size={size} loading={loading} />
    </div>
  );
}

// Animated Custom Loader using Framer Motion
function EnveaveLoader({ loading = true }) {
  if (!loading) return null;
  
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative">
        <motion.div
          className="w-16 h-16 rounded-full"
          style={{ backgroundColor: brandColors.primary }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-8 h-8 rounded-full absolute top-4 left-4"
          style={{ backgroundColor: brandColors.secondary }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
      </div>
    </div>
  );
}

// Pulse Loader Component
function DotLoader({ size = 10, color = brandColors.primary, loading = true }) {
  if (!loading) return null;
  
  return (
    <div className="flex justify-center items-center p-4">
      <PulseLoader color={color} size={size} loading={loading} />
    </div>
  );
}

// Full Page Loader
function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50">
      <EnveaveLoader />
    </div>
  );
}

// Card Content Skeleton Loader
function CardSkeleton({ count = 1 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Array(count).fill(0).map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4">
          <Skeleton height={200} baseColor="#e9eaec" highlightColor="#f6f67d33" />
          <Skeleton height={30} width="70%" className="mt-4" baseColor="#e9eaec" highlightColor="#f6f67d33" />
          <Skeleton count={2} className="mt-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
          <div className="flex justify-between mt-4">
            <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" />
            <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Profile Content Skeleton Loader
function ProfileSkeleton() {
  return (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <Skeleton circle width={80} height={80} baseColor="#e9eaec" highlightColor="#f6f67d33" />
        <div className="ml-4 flex-1">
          <Skeleton height={30} width="60%" baseColor="#e9eaec" highlightColor="#f6f67d33" />
          <Skeleton height={20} width="40%" baseColor="#e9eaec" highlightColor="#f6f67d33" />
        </div>
      </div>
      
      <Skeleton height={40} className="mb-4" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      <Skeleton count={3} height={20} className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      
      <div className="mt-6">
        <Skeleton height={30} width="40%" className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
        <Skeleton count={2} height={20} className="mb-4" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
      
      <div className="mt-6">
        <Skeleton height={30} width="40%" className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
        <Skeleton count={4} height={20} className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
    </div>
  );
}

// Form Content Skeleton Loader
function FormSkeleton() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Skeleton height={40} width="60%" className="mb-6" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      
      <div className="mb-6">
        <Skeleton height={20} width="30%" className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
        <Skeleton height={50} className="mb-4" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
      
      <div className="mb-6">
        <Skeleton height={20} width="30%" className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
        <Skeleton height={50} className="mb-4" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
      
      <div className="mb-6">
        <Skeleton height={20} width="30%" className="mb-2" baseColor="#e9eaec" highlightColor="#f6f67d33" />
        <Skeleton height={100} className="mb-4" baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
      
      <div className="flex justify-end">
        <Skeleton height={50} width={150} baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
    </div>
  );
}

// Table Skeleton Loader
function TableSkeleton({ rows = 5 }) {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex mb-4 bg-gray-50 p-4 rounded">
        <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mr-4" />
        <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mr-4" />
        <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mr-4 flex-1" />
        <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" />
      </div>
      
      {/* Rows */}
      {Array(rows).fill(0).map((_, index) => (
        <div key={index} className="flex p-3 border-b">
          <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mr-4" />
          <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mr-4" />
          <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mr-4 flex-1" />
          <Skeleton width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" />
        </div>
      ))}
    </div>
  );
}

// Opportunity Skeleton Loader - Custom for Individual Opportunity Page
function OpportunitySkeleton() {
  return (
    <div className="individual-opportunity-main-container">
      {/* Top Section */}
      <div className="individual-opportunity-top-container">
        {/* Title Bar */}
        <div className="individual-opportunity-top-title-bar">
          <Skeleton height={40} width="60%" baseColor="#e9eaec" highlightColor="#f6f67d33" />
          <div className="individual-opportunity-top-title-toggle">
            <Skeleton circle width={20} height={20} baseColor="#e9eaec" highlightColor="#f6f67d33" />
            <Skeleton width={60} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginLeft: '8px' }} />
          </div>
        </div>
        
        {/* Sub-title Bar */}
        <div className="individual-opportunity-sub-title-bar">
          <div className="individual-opportunity-tags-container">
            {Array(3).fill(0).map((_, index) => (
              <Skeleton key={index} width={80} height={30} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginRight: '8px', borderRadius: '15px' }} />
            ))}
          </div>
          <Skeleton width={120} baseColor="#e9eaec" highlightColor="#f6f67d33" />
        </div>
        
        {/* Basic Section */}
        <div className="individual-opportunity-basic-section">
          <Skeleton height={250} width={320} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ borderRadius: '8px' }} />
          
          <div className="individual-opportunity-basic-section-details">
            <div className="individual-opportunity-basic-section-upper">
              {Array(3).fill(0).map((_, index) => (
                <span key={index} className="individual-opportunity-basic-icons-details">
                  <Skeleton circle width={24} height={24} baseColor="#e9eaec" highlightColor="#f6f67d33" />
                  <Skeleton width={150} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginLeft: '8px' }} />
                </span>
              ))}
            </div>
            
            <div className="individual-opportunity-basic-section-bottom">
              {Array(3).fill(0).map((_, index) => (
                <span key={index} className="individual-opportunity-basic-lower-details">
                  <Skeleton height={20} width={80} baseColor="#e9eaec" highlightColor="#f6f67d33" />
                  <Skeleton height={16} width={100} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginTop: '4px' }} />
                </span>
              ))}
            </div>
            
            <Skeleton height={50} width={200} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginTop: '20px', borderRadius: '25px' }} />
          </div>
        </div>
      </div>
      
      {/* POC Section */}
      <div className="individual-opportunity-POC-section">
        <Skeleton height={30} width="30%" baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-4" />
        {Array(2).fill(0).map((_, index) => (
          <div key={index} className="mb-3">
            <Skeleton height={20} width={60} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-2" />
            <Skeleton height={20} width={200} baseColor="#e9eaec" highlightColor="#f6f67d33" />
          </div>
        ))}
      </div>
      
      {/* Bottom Description Sections */}
      <div className="individual-opportunity-bottom-container">
        {/* About Opportunity */}
        <div className="individual-opportunity-bottom-sub-containers">
          <Skeleton height={30} width="40%" baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-4" />
          <Skeleton count={4} height={20} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-2" />
          
          <div className="mt-4">
            <Skeleton height={24} width={150} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-3" />
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="flex items-center mb-2">
                <Skeleton circle width={6} height={6} baseColor="#e9eaec" highlightColor="#f6f67d33" />
                <Skeleton height={16} width={200} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginLeft: '10px' }} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Milestones Section */}
        <div className="individual-opportunity-bottom-sub-containers">
          <Skeleton height={30} width="30%" baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-4" />
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="flex items-center mb-2">
              <Skeleton circle width={6} height={6} baseColor="#e9eaec" highlightColor="#f6f67d33" />
              <Skeleton height={16} width={280} baseColor="#e9eaec" highlightColor="#f6f67d33" style={{ marginLeft: '10px' }} />
            </div>
          ))}
        </div>
        
        {/* About Organization */}
        <div className="individual-opportunity-bottom-sub-containers">
          <Skeleton height={30} width="40%" baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-4" />
          <Skeleton count={3} height={20} baseColor="#e9eaec" highlightColor="#f6f67d33" className="mb-2" />
        </div>
      </div>
    </div>
  );
}

// Export all components
export {
  SpinnerLoader,
  PulsingLoader,
  HashSpinnerLoader,
  EnveaveLoader,
  DotLoader,
  PageLoader,
  CardSkeleton,
  ProfileSkeleton,
  FormSkeleton,
  TableSkeleton,
  OpportunitySkeleton
};
