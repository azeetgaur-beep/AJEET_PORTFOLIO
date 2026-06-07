import { useRef, useEffect } from 'react';

const NatureCanvas = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate static geometry data
    const mountData = [
      { color: '#C8D9CC', p: [] },
      { color: '#B0C9B5', p: [] },
      { color: '#8FAF8A', p: [] },
      { color: '#6B8F6E', p: [] }
    ];
    
    const ranges = [
      { min: 0.18, max: 0.38 },
      { min: 0.29, max: 0.45 },
      { min: 0.44, max: 0.62 },
      { min: 0.59, max: 0.72 }
    ];
    
    for (let i = 0; i < 4; i++) {
      const numP = 15 + i * 5;
      for (let j = 0; j <= numP; j++) {
        const x = j / numP;
        const y = ranges[i].min + Math.random() * (ranges[i].max - ranges[i].min);
        mountData[i].p.push({ x, y });
      }
    }

    const treeXs = [0.03, 0.065, 0.1, 0.81, 0.84, 0.87, 0.91, 0.94, 0.97]; // 9 trees
    const treeData = treeXs.map(x => ({
      x,
      yBase: 0.8 + Math.random() * 0.05, 
      heightRatio: 0.09 + Math.random() * 0.09, 
      opacity: 0.28 + Math.random() * 0.17, 
      asym: Math.random() * 0.2 - 0.1
    }));

    const flowerXs = [0.04, 0.08, 0.78, 0.86, 0.92, 0.96]; // 6 flowers
    const fColors = ['rgba(180,140,180,0.55)', 'rgba(200,155,160,0.5)', 'rgba(155,175,140,0.45)'];
    const flowerData = flowerXs.map(x => ({
      x,
      yBase: 0.86 + Math.random() * 0.06, 
      heightRatio: 0.04 + Math.random() * 0.03, 
      color: fColors[Math.floor(Math.random() * fColors.length)],
      petalScale: 0.8 + Math.random() * 0.4
    }));

    const grassData = Array.from({ length: 15 }).map(() => ({
      x: Math.random(),
      yBase: 0.82 + Math.random() * 0.15,
      h: 0.02 + Math.random() * 0.02, 
      curve: (Math.random() - 0.5) * 0.02
    }));

    const draw = () => {
      tRef.current += 0.012;
      const t = tRef.current;
      const W = canvas.width;
      const H = canvas.height;
      const mouseX = mouseRef.current.x;
      
      ctx.clearRect(0, 0, W, H);

      // 1. SKY GRADIENT
      const skyGrad = ctx.createLinearGradient(0, 0, 0, H * 0.7);
      skyGrad.addColorStop(0, '#D6E8F0');
      skyGrad.addColorStop(0.35, '#E8F2E8');
      skyGrad.addColorStop(0.7, '#F2EDE4');
      skyGrad.addColorStop(1, '#FAFAF6');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, H);

      // 2. SUN
      const sx = W * 0.72 + (mouseX - 0.5) * 18;
      const sy = H * 0.14;
      
      const drawSunGrad = (rInner, rOuter, colorIn, colorOut) => {
        const grad = ctx.createRadialGradient(sx, sy, rInner, sx, sy, rOuter);
        grad.addColorStop(0, colorIn);
        grad.addColorStop(1, colorOut);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sx, sy, rOuter, 0, Math.PI * 2);
        ctx.fill();
      };
      
      drawSunGrad(0, H * 0.35, 'rgba(255,220,150,0.18)', 'transparent');
      drawSunGrad(0, H * 0.22, 'rgba(255,238,200,0.55)', 'transparent');
      
      ctx.fillStyle = 'rgba(255,245,210,0.9)';
      ctx.beginPath();
      ctx.arc(sx, sy, H * 0.045, 0, Math.PI * 2);
      ctx.fill();

      // 3. FAR MOUNTAINS
      mountData.forEach((layer, i) => {
        ctx.fillStyle = layer.color;
        ctx.beginPath();
        const plx = (mouseX - 0.5) * W * 0.05 * (i + 1);
        
        ctx.moveTo(0, H);
        ctx.lineTo(-W*0.1 + plx, layer.p[0].y * H);
        
        for (let j = 1; j < layer.p.length; j++) {
          const pt = layer.p[j];
          ctx.lineTo(pt.x * W * 1.2 - W*0.1 + plx, pt.y * H);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fill();

        // Mist bands between 2-3 and 3-4
        if (i === 1 || i === 2) {
          const mistGrad = ctx.createLinearGradient(0, 0, W, 0);
          mistGrad.addColorStop(0, 'rgba(240,246,242,0.1)');
          mistGrad.addColorStop(0.5, 'rgba(240,246,242,0.5)');
          mistGrad.addColorStop(1, 'rgba(240,246,242,0.1)');
          ctx.fillStyle = mistGrad;
          
          const mistY = i === 1 ? H * 0.45 : H * 0.62;
          ctx.fillRect(0, mistY, W, H * 0.06);
        }
      });

      // 4. DISTANT BIRDS
      ctx.strokeStyle = 'rgba(80,100,90,0.25)';
      ctx.lineWidth = 0.8;
      const birdXs = [0.55, 0.58, 0.62];
      const birdYs = [0.12, 0.10, 0.16];
      birdXs.forEach((bx, i) => {
        const layerFactor = i + 1;
        const bxPx = bx * W + (mouseX - 0.5) * W * 0.15 * layerFactor;
        const byPx = birdYs[i] * H;
        
        ctx.beginPath();
        ctx.moveTo(bxPx - 10, byPx - 5);
        ctx.quadraticCurveTo(bxPx - 5, byPx, bxPx, byPx + 3);
        ctx.quadraticCurveTo(bxPx + 5, byPx, bxPx + 10, byPx - 5);
        ctx.stroke();
      });

      // 5. PINE TREES
      treeData.forEach(tree => {
        const tx = tree.x * W;
        const ty = tree.yBase * H; 
        const tH = tree.heightRatio * H;
        
        ctx.strokeStyle = `rgba(50,75,50,${tree.opacity})`;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        
        ctx.moveTo(tx, ty);
        ctx.lineTo(tx, ty - tH * 0.15);
        
        for (let l = 0; l < 4; l++) {
          const peakY = ty - tH + tH * (l + 1) * 0.28;
          const maxWidth = tH * 0.35;
          const branchW = maxWidth * (0.25 + l * 0.25);
          
          ctx.moveTo(tx, peakY - tH*0.05);
          ctx.lineTo(tx - branchW * (1 + tree.asym), peakY + tH*0.1);
          ctx.lineTo(tx, peakY + tH*0.02);
          
          ctx.moveTo(tx, peakY - tH*0.05);
          ctx.lineTo(tx + branchW * (1 - tree.asym), peakY + tH*0.1);
          ctx.lineTo(tx, peakY + tH*0.02);
        }
        ctx.stroke();
      });

      // 6. WILDFLOWERS
      flowerData.forEach(f => {
        const fx = f.x * W;
        const fy = f.yBase * H;
        const fh = f.heightRatio * H;
        
        ctx.strokeStyle = 'rgba(120,140,110,0.5)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        
        ctx.moveTo(fx, fy);
        ctx.quadraticCurveTo(fx + 5, fy - fh / 2, fx, fy - fh);
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(120,140,110,0.5)';
        ctx.beginPath();
        ctx.ellipse(fx - 3, fy - fh*0.4, 4, 1.5, Math.PI/4, 0, Math.PI*2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(fx + 3, fy - fh*0.6, 4, 1.5, -Math.PI/4, 0, Math.PI*2);
        ctx.fill();

        const wobble = Math.sin(t * 0.4 + f.x * 0.01) * 0.03;
        const center = { x: fx, y: fy - fh };
        const pr = 4 * f.petalScale; 
        
        ctx.fillStyle = f.color;
        for (let p = 0; p < 5; p++) {
          const angle = (Math.PI * 2 / 5) * p + wobble;
          const px = center.x + Math.cos(angle) * (pr * 0.7);
          const py = center.y + Math.sin(angle) * (pr * 0.7);
          
          ctx.beginPath();
          ctx.ellipse(px, py, pr * 0.45, pr * 0.25, angle, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = 'rgba(255,230,120,0.9)';
        ctx.beginPath();
        ctx.arc(center.x, center.y, pr * 0.3, 0, Math.PI*2);
        ctx.fill();
      });

      // 7. GROUND
      const groundY = H * 0.82;
      const gGrad = ctx.createLinearGradient(0, groundY, 0, H);
      gGrad.addColorStop(0, 'transparent');
      gGrad.addColorStop(1, 'rgba(160,185,130,0.55)');
      ctx.fillStyle = gGrad;
      ctx.fillRect(0, groundY, W, H - groundY);

      ctx.strokeStyle = 'rgba(100,135,90,0.12)';
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      grassData.forEach(g => {
        const gx = g.x * W;
        const gh = g.h * H;
        const gy = g.yBase * H;
        ctx.moveTo(gx, gy);
        ctx.quadraticCurveTo(gx + g.curve * W, gy - gh / 2, gx + g.curve * 2 * W, gy - gh);
      });
      ctx.stroke();

      // 8. INK PAPER TEXTURE
      ctx.strokeStyle = '#2C2C1E';
      ctx.lineWidth = 0.4;
      ctx.globalAlpha = 0.025;
      ctx.beginPath();
      for (let k = 0; k < 180; k++) {
        const rx = Math.random() * W;
        const ry = Math.random() * H;
        const len = 2 + Math.random() * 6;
        const ang = Math.random() * Math.PI * 2;
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx + Math.cos(ang) * len, ry + Math.sin(ang) * len);
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;

      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} 
    />
  );
};

export default NatureCanvas;
