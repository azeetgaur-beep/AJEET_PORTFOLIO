import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const GrowingTree = ({ side = 'left' }) => {
  const canvasRef = useRef(null);
  const isInView = useInView(canvasRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationFrameId;
    let branches = [];
    
    const parentWidth = canvas.parentElement.clientWidth;
    const parentHeight = canvas.parentElement.clientHeight;

    // Start position: slightly offset to wrap the form better
    const startX = side === 'left' ? parentWidth * 0.8 : parentWidth * 0.2;
    const startY = parentHeight;
    
    // Base angle leans towards the center of the page
    const baseAngle = side === 'left' ? -Math.PI / 2 + 0.3 : -Math.PI / 2 - 0.3;

    branches.push({
      startX,
      startY,
      angle: baseAngle,
      length: 0,
      maxLength: parentHeight * 0.25,
      width: 14,
      color: '#2a1f1a', // Dark, rich bark
      generation: 0,
      maxGeneration: 7,
      progress: 0,
      hasBranched: false
    });

    const drawTree = () => {
      let isGrowing = false;
      ctx.clearRect(0, 0, parentWidth, parentHeight);
      
      const newBranches = [];
      
      branches.forEach(branch => {
        if (branch.progress < 1) {
          branch.progress += 0.015; // Smooth, slow growth
          if (branch.progress > 1) branch.progress = 1;
          isGrowing = true;
        }

        const currentLength = branch.maxLength * branch.progress;
        
        // Calculate curve - branches bend slightly upwards as they grow
        const endX = branch.startX + Math.cos(branch.angle) * currentLength;
        const endY = branch.startY + Math.sin(branch.angle) * currentLength;

        ctx.beginPath();
        ctx.moveTo(branch.startX, branch.startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = branch.color;
        ctx.lineWidth = branch.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Branching logic
        if (branch.progress >= 1 && !branch.hasBranched && branch.generation < branch.maxGeneration) {
          branch.hasBranched = true;
          isGrowing = true;
          
          // Generate 2 to 3 branches per node
          const numChildren = branch.generation === 0 ? 3 : (Math.random() > 0.4 ? 2 : 3);
          
          for (let i = 0; i < numChildren; i++) {
            // Natural random spread
            const angleOffset = (Math.random() - 0.5) * 1.2;
            let newAngle = branch.angle + angleOffset;
            
            // Gently force branches to grow upwards over time
            newAngle = newAngle * 0.9 + (-Math.PI / 2) * 0.1;

            const isLeaf = branch.generation >= branch.maxGeneration - 2;
            
            // If it's a leaf/terminal branch, mix green leaves and magenta flowers
            let nextColor = '#2a1f1a';
            let nextWidth = branch.width * 0.7;
            
            if (isLeaf) {
              const r = Math.random();
              if (r > 0.7) nextColor = '#D81B60'; // Magenta Bougainvillea flower
              else if (r > 0.4) nextColor = '#E91E63'; // Lighter pink
              else nextColor = '#7C9E7A'; // Sage green leaf
              nextWidth = 3 + Math.random() * 2;
            }
            
            newBranches.push({
              startX: endX,
              startY: endY,
              angle: newAngle,
              length: 0,
              maxLength: branch.maxLength * (0.65 + Math.random() * 0.2),
              width: Math.max(0.5, nextWidth),
              color: nextColor,
              generation: branch.generation + 1,
              maxGeneration: branch.maxGeneration,
              progress: 0,
              hasBranched: false
            });
          }
        }
      });

      if (newBranches.length > 0) {
        branches = [...branches, ...newBranches];
      }

      // Keep requesting frames until everything is fully grown
      if (isGrowing || newBranches.length > 0) {
        animationFrameId = requestAnimationFrame(drawTree);
      }
    };

    animationFrameId = requestAnimationFrame(drawTree);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, side]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default GrowingTree;
