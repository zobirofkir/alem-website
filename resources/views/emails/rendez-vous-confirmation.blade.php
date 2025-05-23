<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Confirmation de votre rendez-vous</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Confirmation de votre rendez-vous</h2>
        </div>
        
        <div class="content">
            <p>Bonjour {{ $rendezVous->prenom }} {{ $rendezVous->nom }},</p>
            
            <p>Nous vous confirmons que votre demande de rendez-vous a été reçue avec succès.</p>
            
            <p><strong>Détails de votre rendez-vous :</strong></p>
            <ul>
                <li>Date : {{ \Carbon\Carbon::parse($rendezVous->date)->format('d/m/Y') }}</li>
                <li>Heure : {{ $rendezVous->heure }}</li>
                <li>Type d'analyse : {{ $rendezVous->typeAnalyse }}</li>
                <li>Lieu : {{ $rendezVous->type === 'laboratoire' ? 'À notre laboratoire' : 'À votre domicile' }}</li>
            </ul>
            
            <p>Nous vous remercions pour votre confiance et restons à votre disposition pour toute information complémentaire.</p>
            
            <p>Cordialement,<br>
            L'équipe du laboratoire</p>
        </div>
        
        <div class="footer">
            <p>Ceci est un message automatique, merci de ne pas y répondre.</p>
        </div>
    </div>
</body>
</html>