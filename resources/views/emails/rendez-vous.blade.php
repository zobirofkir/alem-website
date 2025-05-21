<!DOCTYPE html>
<html>
<head>
    <title>Nouveau Rendez-vous</title>
</head>
<body>
    <h1>Nouveau Rendez-vous</h1>
    
    <p><strong>Nom:</strong> {{ $rendezVous->nom }}</p>
    <p><strong>Prénom:</strong> {{ $rendezVous->prenom }}</p>
    <p><strong>Email:</strong> {{ $rendezVous->email }}</p>
    <p><strong>Téléphone:</strong> {{ $rendezVous->telephone }}</p>
    <p><strong>Adresse:</strong> {{ $rendezVous->adresse }}</p>
    <p><strong>Type d'analyse:</strong> {{ $rendezVous->typeAnalyse }}</p>
    <p><strong>Date:</strong> {{ $rendezVous->date }}</p>
    <p><strong>Heure:</strong> {{ $rendezVous->heure }}</p>
    <p><strong>Type de rendez-vous:</strong> {{ $rendezVous->type }}</p>
    
    @if($rendezVous->message)
    <div>
        <strong>Message:</strong>
        <p>{{ $rendezVous->message }}</p>
    </div>
    @endif
    
    <p>Ce rendez-vous a été pris depuis le site web.</p>
</body>
</html>