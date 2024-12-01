import { Component } from '@angular/core';

@Component({
  selector: 'app-root-shell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isMicrofrontendLoaded = false;
  private loader;

  constructor() {
    this.loader = new MicrofrontendLoaderService();
  }

  ngOnInit(): void {
    this.loader
      .loadScript('http://localhost:4201/main.js')
      .then(() => {
        console.log('Microfrontend carregado com sucesso!');
        this.isMicrofrontendLoaded = true;
      })
      .catch((err:any) => console.error(err));
  }
}

class MicrofrontendLoaderService {
  loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(); // Script já carregado
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.type = 'module';
      script.onload = () => resolve();
      script.onerror = () => reject(`Erro ao carregar o script: ${src}`);
      document.body.appendChild(script);
    });
  }
}